/**
 * Convert HTML string to a Document.
 * @param {string} html
 * @returns {Document} Parsed document
 */
function parseDocument(html) {
    const parser = new DOMParser();
    return parser.parseFromString(html, "text/html");
}

/**
 * Replace body of document.
 * @param {Document} newDocument
 */
function replaceBody(newDocument) {
    const preservedNodes = document.body.querySelectorAll("[preserve]");
    preservedNodes.forEach(prevDocument => {
        let nextDocument = newDocument.body.querySelector(`[preserve][id="${prevDocument.id}"]`);
        if (nextDocument) {
            const clonedDocument = prevDocument.cloneNode(true);
            nextDocument.replaceWith(clonedDocument);
        }
    });

    document.body.replaceWith(newDocument.body);
}

function partitionNodes(prevNodes, nextNodes) {
    const staleNodes = [];
    const freshNodes = [];
    let oldMark = 0;
    let nextMark = 0;

    while (oldMark < prevNodes.length || nextMark < nextNodes.length) {
        const old = prevNodes[oldMark];
        const next = nextNodes[nextMark];
        if (old?.isEqualNode(next)) {
            ++oldMark;
            ++nextMark;
            continue;
        }

        const oldInFresh = old ? freshNodes.findIndex(node => node.isEqualNode(old)) : -1;
        if (oldInFresh !== -1) {
            freshNodes.splice(oldInFresh, 1);
            ++oldMark;
            continue;
        }

        const nextInStale = next ? staleNodes.findIndex(node => node.isEqualNode(next)) : -1;
        if (nextInStale !== -1) {
            staleNodes.splice(nextInStale, 1);
            ++nextMark;
            continue;
        }

        old && staleNodes.push(old);
        next && freshNodes.push(next);
        ++oldMark;
        ++nextMark;
    }

    return {staleNodes, freshNodes};
}

/**
 * Merge head data with new document.
 * @param {Document} newDocument
 */
function mergeHead(newDocument) {
    const getValidNodes = (doc) => {
        return Array.from(doc.querySelectorAll("head>:not([rel='prefetch'])"));
    };
    const prevNodes = getValidNodes(document);
    const newNodes = getValidNodes(newDocument);
    const {staleNodes, freshNodes} = partitionNodes(prevNodes, newNodes);

    staleNodes.forEach(node => node.remove());

    document.head.append(...freshNodes);
}

function replaceAndRunScripts(prevScript) {
    const newScript = document.createElement("script");
    const attributes = Array.from(prevScript.attributes);

    for (const {name, value} of attributes) {
        newScript[name] = value;
    }

    newScript.append(prevScript.textContent);
    prevScript.replaceWith(newScript);
}

/**
 * Executes scripts in the fetched document.
 * In the head only scripts with the [data-reload] attribute will execute.
 * All body scripts will execute.
 */
function runScripts() {
    const scriptsInHead = document.head.querySelectorAll("[data-reload]");
    scriptsInHead.forEach(replaceAndRunScripts);

    const scriptsInBody = document.body.querySelectorAll("script");
    scriptsInBody.forEach(replaceAndRunScripts);
}

export { parseDocument, replaceBody, mergeHead, runScripts };