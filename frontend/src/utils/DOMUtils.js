/**
 * Creates a HTML SVG Element from a string
 *
 * @param {string} svg
 * @returns {SVGSVGElement}
 */
export function svgFromString(svg) {
    const parser = new DOMParser().parseFromString(svg, "image/svg+xml");
    const element = parser.querySelector("svg");

    if (!element) {
        throw new Error("Invalid SVG string");
    }

    return document.importNode(element, true);
}
