(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&t(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();function p(s){return new DOMParser().parseFromString(s,"text/html")}function g(s){document.body.querySelectorAll("[preserve]").forEach(a=>{let t=s.body.querySelector(`[preserve][id="${a.id}"]`);if(t){const e=a.cloneNode(!0);t.replaceWith(e)}}),document.body.replaceWith(s.body)}function m(s,n){const a=[],t=[];let e=0,i=0;for(;e<s.length||i<n.length;){const o=s[e],l=n[i];if(o?.isEqualNode(l)){++e,++i;continue}const c=o?t.findIndex(r=>r.isEqualNode(o)):-1;if(c!==-1){t.splice(c,1),++e;continue}const d=l?a.findIndex(r=>r.isEqualNode(l)):-1;if(d!==-1){a.splice(d,1),++i;continue}o&&a.push(o),l&&t.push(l),++e,++i}return{staleNodes:a,freshNodes:t}}function u(s){const n=o=>Array.from(o.querySelectorAll("head>:not([rel='prefetch'])")).filter(l=>!l.matches('link[rel~="stylesheet"], style')),a=n(document),t=n(s),{staleNodes:e,freshNodes:i}=m(a,t);e.forEach(o=>o.remove()),document.head.append(...i)}function h(s){const n=document.createElement("script"),a=Array.from(s.attributes);for(const{name:t,value:e}of a)n[t]=e;n.append(s.textContent),s.replaceWith(n)}function v(){document.head.querySelectorAll("[data-reload]").forEach(h),document.body.querySelectorAll("script").forEach(h)}class b{constructor(n,a={fallback:"/404"}){this.pages=this.registerRoutes(n),this.options=a,this.init()}init(){window.addEventListener("popstate",()=>{this.updateDocumentContent()}),document.addEventListener("DOMContentLoaded",()=>{document.addEventListener("click",n=>{this.navigationHandler(n)}),this.updateDocumentContent()})}registerRoutes(n){const a={};return n.map(t=>{a[t.path]=t.document}),a}updateDocumentContent(){const n=window.location.pathname.replace(/\/+$/,"")||"/",a=this.pages[n]||this.pages[this.options.fallback],t=p(a);this.renderDocumentToBrowser(t)}navigationHandler(n){if(n.defaultPrevented||n.button!==0||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)return;const a=n.target.closest("a[href]");if(!a||a.target&&a.target.toLowerCase()==="_blank"||a.hasAttribute("download")||a.rel?.includes("external"))return;const t=new URL(a.href,window.location.href);if(!/^https?:$/.test(t.protocol)||t.origin!==window.location.origin||t.pathname===window.location.pathname&&t.hash!==window.location.hash&&t.search===window.location.search)return;n.preventDefault();const i=window.location.pathname+window.location.search+window.location.hash,o=t.pathname+t.search+t.hash;o!==i&&(history.pushState(null,null,o),this.updateDocumentContent())}renderDocumentToBrowser(n){u(n),g(n),v()}}const C=`<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <link rel="icon" type="image/svg+xml" href="/vite.svg"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>P&J | Home</title>
</head>
<body>
Homepagina
</body>
</html>
`,w=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>P&J | Admin</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="panel grid">
    <h1 class="page-title heading-three">Pagina's</h1>
    <div class="action-buttons">
      <button class="button button-icon-text body">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5 9H9.5V14C9.5 14.2652 9.39464 14.5196 9.20711 14.7071C9.01957 14.8946 8.76522 15 8.5 15C8.23478 15 7.98043 14.8946 7.79289 14.7071C7.60536 14.5196 7.5 14.2652 7.5 14V9H2.5C2.23478 9 1.98043 8.89464 1.79289 8.70711C1.60536 8.51957 1.5 8.26522 1.5 8C1.5 7.73478 1.60536 7.48043 1.79289 7.29289C1.98043 7.10536 2.23478 7 2.5 7H7.5V2C7.5 1.73478 7.60536 1.48043 7.79289 1.29289C7.98043 1.10536 8.23478 1 8.5 1C8.76522 1 9.01957 1.10536 9.20711 1.29289C9.39464 1.48043 9.5 1.73478 9.5 2V7H14.5C14.7652 7 15.0196 7.10536 15.2071 7.29289C15.3946 7.48043 15.5 7.73478 15.5 8C15.5 8.26522 15.3946 8.51957 15.2071 8.70711C15.0196 8.89464 14.7652 9 14.5 9Z"
            fill="currentColor"
          />
        </svg>
        <span>Pagina Toevoegen</span>
      </button>
    </div>

    <nav class="navigation">
      <ul class="navigation-list">
        <li class="navigation-item selected">
          <a class="navigation-content" href="/admin">
            <svg
              class="navigation-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1111 15.1111C13.1111 14.0065 14.0065 13.1111 15.1111 13.1111H20C21.1046 13.1111 22 14.0065 22 15.1111V20C22 21.1046 21.1046 22 20 22H15.1111C14.0065 22 13.1111 21.1046 13.1111 20V15.1111ZM15.1111 10.8889C14.0065 10.8889 13.1111 9.99346 13.1111 8.88889V4C13.1111 2.89543 14.0065 2 15.1111 2H20C21.1046 2 22 2.89543 22 4V8.88889C22 9.99346 21.1046 10.8889 20 10.8889H15.1111ZM10.8889 8.88889C10.8889 9.99346 9.99346 10.8889 8.88889 10.8889H4C2.89543 10.8889 2 9.99346 2 8.88889V4C2 2.89543 2.89543 2 4 2H8.88889C9.99346 2 10.8889 2.89543 10.8889 4V8.88889ZM8.88889 13.1111C9.99346 13.1111 10.8889 14.0065 10.8889 15.1111V20C10.8889 21.1046 9.99346 22 8.88889 22H4C2.89543 22 2 21.1046 2 20V15.1111C2 14.0065 2.89543 13.1111 4 13.1111H8.88889Z"
                fill="currentColor"
              />
            </svg>
            <span class="navigation-text paragraph">Overzicht</span>
          </a>
        </li>
        <li class="navigation-item">
          <a class="navigation-content" href="/admin/modules">
            <svg
              class="navigation-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.88 7.175C20.1604 6.45788 19.1859 6.05515 18.17 6.055H13.81C13.6501 6.05564 13.4923 6.01792 13.35 5.945C13.2057 5.86926 13.0821 5.75941 12.99 5.625L12.12 4.295C11.7689 3.7683 11.293 3.33657 10.7347 3.03823C10.1764 2.73989 9.55301 2.58419 8.92 2.585H5.84C4.8233 2.585 3.84809 2.98819 3.12824 3.70617C2.40839 4.42415 2.00265 5.3983 2 6.415V17.575C2.00525 18.5918 2.41151 19.5655 3.13052 20.2845C3.84952 21.0035 4.82319 21.4097 5.84 21.415H18.17C19.1867 21.4124 20.1609 21.0066 20.8788 20.2868C21.5968 19.5669 22 18.5917 22 17.575V9.925C22.0075 9.41491 21.9121 8.90854 21.7197 8.43608C21.5273 7.96361 21.2417 7.53473 20.88 7.175ZM16.63 17.045H7.38C7.11478 17.045 6.86043 16.9396 6.67289 16.7521C6.48536 16.5646 6.38 16.3102 6.38 16.045C6.38 15.7798 6.48536 15.5254 6.67289 15.3379C6.86043 15.1504 7.11478 15.045 7.38 15.045H16.63C16.8952 15.045 17.1496 15.1504 17.3371 15.3379C17.5246 15.5254 17.63 15.7798 17.63 16.045C17.63 16.3102 17.5246 16.5646 17.3371 16.7521C17.1496 16.9396 16.8952 17.045 16.63 17.045Z"
                fill="currentColor"
              />
            </svg>
            <span class="navigation-text paragraph">Modules</span></a
          >
        </li>
        <li class="navigation-item">
          <a class="navigation-content" href="/admin/pages">
            <svg
              class="navigation-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5 3L19 8.5V20C19 20.55 18.55 21 18 21H6C5.45 21 5 20.55 5 20V4C5 3.45 5.45 3 6 3H13.5Z"
                fill="currentColor"
              />
            </svg>
            <span class="navigation-text paragraph">Pagina's</span>
          </a>
        </li>

        <li class="navigation-item">
          <a class="navigation-content" href="/admin/messages">
            <svg
              class="navigation-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 2.565H19C19.7956 2.565 20.5587 2.88107 21.1213 3.44368C21.6839 4.00629 22 4.76935 22 5.565V13.565C22 14.3606 21.6839 15.1237 21.1213 15.6863C20.5587 16.2489 19.7956 16.565 19 16.565H12.042L5.598 21.373C5.44922 21.484 5.27248 21.5514 5.08756 21.5677C4.90265 21.5839 4.71686 21.5484 4.551 21.465C4.38513 21.3817 4.24574 21.2538 4.14843 21.0957C4.05111 20.9377 3.99972 20.7556 4 20.57V16.564C3.46957 16.564 2.96086 16.3533 2.58579 15.9782C2.21071 15.6031 2 15.0944 2 14.564V5.564C2 4.76835 2.31607 4.00529 2.87868 3.44268C3.44129 2.88007 4.20435 2.565 5 2.565Z"
                fill="currentColor"
              />
            </svg>
            <span class="navigation-text paragraph">Berichten</span>
          </a>
        </li>

        <li class="navigation-item" id="navigation-account-button">
          <a class="navigation-content" href="#">
            <svg
              class="navigation-icon"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 3.75C14.3472 3.75 16.25 5.65279 16.25 8C16.25 10.3472 14.3472 12.25 12 12.25C9.65279 12.25 7.75 10.3472 7.75 8C7.75 5.65279 9.65279 3.75 12 3.75Z"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
            <span class="navigation-text paragraph">Account</span>
          </a>
        </li>
      </ul>

      <div class="account-information">
        <img
          width="46px"
          height="46px"
          alt="account-photo"
          src="https://i.pinimg.com/564x/3a/3d/4b/3a3d4b04d70cc293fadf195b4e1a7bcb.jpg"
          class="account-image"
        />
        <link rel="stylesheet" href="/src/styles/dashboard.css">
    </head>
    <body class="panel grid">
        <nav class="navigation">
            <ul class="navigation-list">
                <li class="navigation-item selected">
                    <a class="navigation-content" href="/admin">
                        <svg
                            class="navigation-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.1111 15.1111C13.1111 14.0065 14.0065 13.1111 15.1111 13.1111H20C21.1046 13.1111 22 14.0065 22 15.1111V20C22 21.1046 21.1046 22 20 22H15.1111C14.0065 22 13.1111 21.1046 13.1111 20V15.1111ZM15.1111 10.8889C14.0065 10.8889 13.1111 9.99346 13.1111 8.88889V4C13.1111 2.89543 14.0065 2 15.1111 2H20C21.1046 2 22 2.89543 22 4V8.88889C22 9.99346 21.1046 10.8889 20 10.8889H15.1111ZM10.8889 8.88889C10.8889 9.99346 9.99346 10.8889 8.88889 10.8889H4C2.89543 10.8889 2 9.99346 2 8.88889V4C2 2.89543 2.89543 2 4 2H8.88889C9.99346 2 10.8889 2.89543 10.8889 4V8.88889ZM8.88889 13.1111C9.99346 13.1111 10.8889 14.0065 10.8889 15.1111V20C10.8889 21.1046 9.99346 22 8.88889 22H4C2.89543 22 2 21.1046 2 20V15.1111C2 14.0065 2.89543 13.1111 4 13.1111H8.88889Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span class="navigation-text paragraph"
                            >Overzicht</span
                        ></a
                    >
                </li>
                <li class="navigation-item">
                    <a class="navigation-content" href="/admin/modules">
                        <svg
                            class="navigation-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.88 7.175C20.1604 6.45788 19.1859 6.05515 18.17 6.055H13.81C13.6501 6.05564 13.4923 6.01792 13.35 5.945C13.2057 5.86926 13.0821 5.75941 12.99 5.625L12.12 4.295C11.7689 3.7683 11.293 3.33657 10.7347 3.03823C10.1764 2.73989 9.55301 2.58419 8.92 2.585H5.84C4.8233 2.585 3.84809 2.98819 3.12824 3.70617C2.40839 4.42415 2.00265 5.3983 2 6.415V17.575C2.00525 18.5918 2.41151 19.5655 3.13052 20.2845C3.84952 21.0035 4.82319 21.4097 5.84 21.415H18.17C19.1867 21.4124 20.1609 21.0066 20.8788 20.2868C21.5968 19.5669 22 18.5917 22 17.575V9.925C22.0075 9.41491 21.9121 8.90854 21.7197 8.43608C21.5273 7.96361 21.2417 7.53473 20.88 7.175ZM16.63 17.045H7.38C7.11478 17.045 6.86043 16.9396 6.67289 16.7521C6.48536 16.5646 6.38 16.3102 6.38 16.045C6.38 15.7798 6.48536 15.5254 6.67289 15.3379C6.86043 15.1504 7.11478 15.045 7.38 15.045H16.63C16.8952 15.045 17.1496 15.1504 17.3371 15.3379C17.5246 15.5254 17.63 15.7798 17.63 16.045C17.63 16.3102 17.5246 16.5646 17.3371 16.7521C17.1496 16.9396 16.8952 17.045 16.63 17.045Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span class="navigation-text paragraph"
                            >Modules</span
                        ></a
                    >
                </li>
                <li class="navigation-item">
                    <a class="navigation-content" href="/admin/pages">
                        <svg
                            class="navigation-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask
                                id="mask0_315_312"
                                style="mask-type: luminance"
                                maskUnits="userSpaceOnUse"
                                x="4"
                                y="2"
                                width="16"
                                height="20"
                            >
                                <path
                                    d="M13.5 3L19 8.5V20C19 20.55 18.55 21 18 21H6C5.45 21 5 20.55 5 20V4C5 3.45 5.45 3 6 3H13.5Z"
                                    fill="white"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M14.5 3.5V8H19L14.5 3.5Z"
                                    fill="black"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M13.5 3L19 8.5"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </mask>
                            <g mask="url(#mask0_315_312)">
                                <path
                                    d="M24 0H0V24H24V0Z"
                                    fill="currentColor"
                                />
                            </g>
                        </svg>
                        <span class="navigation-text paragraph"
                            >Pagina's</span
                        ></a
                    >
                </li>
                <li class="navigation-item">
                    <a class="navigation-content" href="/admin/messages">
                        <svg
                            class="navigation-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 2.565H19C19.7956 2.565 20.5587 2.88107 21.1213 3.44368C21.6839 4.00629 22 4.76935 22 5.565V13.565C22 14.3606 21.6839 15.1237 21.1213 15.6863C20.5587 16.2489 19.7956 16.565 19 16.565H12.042L5.598 21.373C5.44922 21.484 5.27248 21.5514 5.08756 21.5677C4.90265 21.5839 4.71686 21.5484 4.551 21.465C4.38513 21.3817 4.24574 21.2538 4.14843 21.0957C4.05111 20.9377 3.99972 20.7556 4 20.57V16.564C3.46957 16.564 2.96086 16.3533 2.58579 15.9782C2.21071 15.6031 2 15.0944 2 14.564V5.564C2 4.76835 2.31607 4.00529 2.87868 3.44268C3.44129 2.88007 4.20435 2.565 5 2.565Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span class="navigation-text paragraph"
                            >Berichten</span
                        ></a
                    >
                </li>
                <li class="navigation-item" id="navigation-account-button">
                    <a class="navigation-content" href="#">
                        <svg
                            class="navigation-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask id="path-1-inside-1_508_210" fill="white">
                                <path
                                    d="M19.652 19.405C20.204 19.29 20.534 18.712 20.259 18.218C19.653 17.131 18.699 16.175 17.479 15.447C15.907 14.509 13.98 14 12 14C10.02 14 8.09303 14.508 6.52103 15.447C5.30103 16.175 4.34703 17.131 3.74103 18.218C3.46603 18.712 3.79603 19.29 4.34803 19.405C9.3948 20.4569 14.6043 20.4569 19.651 19.405"
                                />
                            </mask>
                            <path
                                d="M19.652 19.405C20.204 19.29 20.534 18.712 20.259 18.218C19.653 17.131 18.699 16.175 17.479 15.447C15.907 14.509 13.98 14 12 14C10.02 14 8.09303 14.508 6.52103 15.447C5.30103 16.175 4.34703 17.131 3.74103 18.218C3.46603 18.712 3.79603 19.29 4.34803 19.405C9.3948 20.4569 14.6043 20.4569 19.651 19.405"
                                fill="currentColor"
                            />
                            <path
                                d="M20.259 18.218L21.5696 17.4884L21.5692 17.4876L20.259 18.218ZM17.479 15.447L18.2477 14.1589L18.2476 14.1589L17.479 15.447ZM6.52103 15.447L7.28966 16.7351L7.29024 16.7348L6.52103 15.447ZM3.74103 18.218L2.43087 17.4876L2.43042 17.4884L3.74103 18.218ZM4.34803 19.405L4.65409 17.9366L4.65396 17.9365L4.34803 19.405ZM19.652 19.405L19.958 20.8735C21.3002 20.5938 22.432 19.0375 21.5696 17.4884L20.259 18.218L18.9484 18.9476C18.82 18.7169 18.8379 18.444 18.9408 18.2503C19.0341 18.0745 19.1885 17.9694 19.3461 17.9365L19.652 19.405ZM20.259 18.218L21.5692 17.4876C20.8195 16.1429 19.6654 15.0049 18.2477 14.1589L17.479 15.447L16.7104 16.7351C17.7327 17.3451 18.4866 18.1191 18.9489 18.9484L20.259 18.218ZM17.479 15.447L18.2476 14.1589C16.4244 13.071 14.2279 12.5 12 12.5V14V15.5C13.7322 15.5 15.3896 15.947 16.7104 16.7351L17.479 15.447ZM12 14V12.5C9.77274 12.5 7.57579 13.0697 5.75182 14.1592L6.52103 15.447L7.29024 16.7348C8.61026 15.9463 10.2673 15.5 12 15.5V14ZM6.52103 15.447L5.75239 14.1589C4.33465 15.0049 3.18056 16.1429 2.43087 17.4876L3.74103 18.218L5.05118 18.9484C5.5135 18.1191 6.2674 17.3451 7.28966 16.7351L6.52103 15.447ZM3.74103 18.218L2.43042 17.4884C1.56808 19.0375 2.69981 20.5938 4.0421 20.8735L4.34803 19.405L4.65396 17.9365C4.81159 17.9694 4.96598 18.0745 5.05928 18.2503C5.16212 18.444 5.18008 18.7169 5.05164 18.9476L3.74103 18.218ZM4.34803 19.405L4.04197 20.8734C9.29061 21.9674 14.7084 21.9674 19.9571 20.8734L19.651 19.405L19.345 17.9366C14.5001 18.9464 9.49899 18.9464 4.65409 17.9366L4.34803 19.405Z"
                                fill="currentColor"
                                mask="url(#path-1-inside-1_508_210)"
                            />
                            <path
                                d="M12 3.75C14.3472 3.75 16.25 5.65279 16.25 8C16.25 10.3472 14.3472 12.25 12 12.25C9.65279 12.25 7.75 10.3472 7.75 8C7.75 5.65279 9.65279 3.75 12 3.75Z"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1.5"
                            />
                        </svg>
                        <span class="navigation-text paragraph"
                            >Account</span
                        ></a
                    >
                </li>
            </ul>
            <div class="account-information">
                <img
                    width="46px"
                    height="46px"
                    alt="account-photo"
                    src="https://i.pinimg.com/564x/3a/3d/4b/3a3d4b04d70cc293fadf195b4e1a7bcb.jpg"
                    class="account-image"
                />

    </head>
    <body class="panel grid">
        <nav class="navigation">
            <ul class="navigation-list">
                <li class="navigation-item selected">
                    <a class="navigation-content" href="/admin">
                        <svg
                            class="navigation-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M13.1111 15.1111C13.1111 14.0065 14.0065 13.1111 15.1111 13.1111H20C21.1046 13.1111 22 14.0065 22 15.1111V20C22 21.1046 21.1046 22 20 22H15.1111C14.0065 22 13.1111 21.1046 13.1111 20V15.1111ZM15.1111 10.8889C14.0065 10.8889 13.1111 9.99346 13.1111 8.88889V4C13.1111 2.89543 14.0065 2 15.1111 2H20C21.1046 2 22 2.89543 22 4V8.88889C22 9.99346 21.1046 10.8889 20 10.8889H15.1111ZM10.8889 8.88889C10.8889 9.99346 9.99346 10.8889 8.88889 10.8889H4C2.89543 10.8889 2 9.99346 2 8.88889V4C2 2.89543 2.89543 2 4 2H8.88889C9.99346 2 10.8889 2.89543 10.8889 4V8.88889ZM8.88889 13.1111C9.99346 13.1111 10.8889 14.0065 10.8889 15.1111V20C10.8889 21.1046 9.99346 22 8.88889 22H4C2.89543 22 2 21.1046 2 20V15.1111C2 14.0065 2.89543 13.1111 4 13.1111H8.88889Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span class="navigation-text paragraph"
                            >Overzicht</span
                        ></a
                    >
                </li>
                <li class="navigation-item">
                    <a class="navigation-content" href="/admin/modules">
                        <svg
                            class="navigation-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.88 7.175C20.1604 6.45788 19.1859 6.05515 18.17 6.055H13.81C13.6501 6.05564 13.4923 6.01792 13.35 5.945C13.2057 5.86926 13.0821 5.75941 12.99 5.625L12.12 4.295C11.7689 3.7683 11.293 3.33657 10.7347 3.03823C10.1764 2.73989 9.55301 2.58419 8.92 2.585H5.84C4.8233 2.585 3.84809 2.98819 3.12824 3.70617C2.40839 4.42415 2.00265 5.3983 2 6.415V17.575C2.00525 18.5918 2.41151 19.5655 3.13052 20.2845C3.84952 21.0035 4.82319 21.4097 5.84 21.415H18.17C19.1867 21.4124 20.1609 21.0066 20.8788 20.2868C21.5968 19.5669 22 18.5917 22 17.575V9.925C22.0075 9.41491 21.9121 8.90854 21.7197 8.43608C21.5273 7.96361 21.2417 7.53473 20.88 7.175ZM16.63 17.045H7.38C7.11478 17.045 6.86043 16.9396 6.67289 16.7521C6.48536 16.5646 6.38 16.3102 6.38 16.045C6.38 15.7798 6.48536 15.5254 6.67289 15.3379C6.86043 15.1504 7.11478 15.045 7.38 15.045H16.63C16.8952 15.045 17.1496 15.1504 17.3371 15.3379C17.5246 15.5254 17.63 15.7798 17.63 16.045C17.63 16.3102 17.5246 16.5646 17.3371 16.7521C17.1496 16.9396 16.8952 17.045 16.63 17.045Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span class="navigation-text paragraph"
                            >Modules</span
                            
                        ></a
                    >
                </li>
                <li class="navigation-item">
                    <a class="navigation-content" href="/admin/pages">
                        <svg
                            class="navigation-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask
                                id="mask0_315_312"
                                style="mask-type: luminance"
                                maskUnits="userSpaceOnUse"
                                x="4"
                                y="2"
                                width="16"
                                height="20"
                            >
                                <path
                                    d="M13.5 3L19 8.5V20C19 20.55 18.55 21 18 21H6C5.45 21 5 20.55 5 20V4C5 3.45 5.45 3 6 3H13.5Z"
                                    fill="white"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M14.5 3.5V8H19L14.5 3.5Z"
                                    fill="black"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M13.5 3L19 8.5"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </mask>
                            <g mask="url(#mask0_315_312)">
                                <path
                                    d="M24 0H0V24H24V0Z"
                                    fill="currentColor"
                                />
                            </g>
                        </svg>
                        <span class="navigation-text paragraph"
                            >Pagina's</span
                        ></a
                    >
                </li>
                <li class="navigation-item">
                    <a class="navigation-content" href="/admin/messages">
                        <svg
                            class="navigation-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 2.565H19C19.7956 2.565 20.5587 2.88107 21.1213 3.44368C21.6839 4.00629 22 4.76935 22 5.565V13.565C22 14.3606 21.6839 15.1237 21.1213 15.6863C20.5587 16.2489 19.7956 16.565 19 16.565H12.042L5.598 21.373C5.44922 21.484 5.27248 21.5514 5.08756 21.5677C4.90265 21.5839 4.71686 21.5484 4.551 21.465C4.38513 21.3817 4.24574 21.2538 4.14843 21.0957C4.05111 20.9377 3.99972 20.7556 4 20.57V16.564C3.46957 16.564 2.96086 16.3533 2.58579 15.9782C2.21071 15.6031 2 15.0944 2 14.564V5.564C2 4.76835 2.31607 4.00529 2.87868 3.44268C3.44129 2.88007 4.20435 2.565 5 2.565Z"
                                fill="currentColor"
                            />
                        </svg>
                        <span class="navigation-text paragraph"
                            >Berichten</span
                        ></a
                    >
                </li>
                <li class="navigation-item" id="navigation-account-button">
                    <a class="navigation-content" href="#">
                        <svg
                            class="navigation-icon"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <mask id="path-1-inside-1_508_210" fill="white">
                                <path
                                    d="M19.652 19.405C20.204 19.29 20.534 18.712 20.259 18.218C19.653 17.131 18.699 16.175 17.479 15.447C15.907 14.509 13.98 14 12 14C10.02 14 8.09303 14.508 6.52103 15.447C5.30103 16.175 4.34703 17.131 3.74103 18.218C3.46603 18.712 3.79603 19.29 4.34803 19.405C9.3948 20.4569 14.6043 20.4569 19.651 19.405"
                                />
                            </mask>
                            <path
                                d="M19.652 19.405C20.204 19.29 20.534 18.712 20.259 18.218C19.653 17.131 18.699 16.175 17.479 15.447C15.907 14.509 13.98 14 12 14C10.02 14 8.09303 14.508 6.52103 15.447C5.30103 16.175 4.34703 17.131 3.74103 18.218C3.46603 18.712 3.79603 19.29 4.34803 19.405C9.3948 20.4569 14.6043 20.4569 19.651 19.405"
                                fill="currentColor"
                            />
                            <path
                                d="M20.259 18.218L21.5696 17.4884L21.5692 17.4876L20.259 18.218ZM17.479 15.447L18.2477 14.1589L18.2476 14.1589L17.479 15.447ZM6.52103 15.447L7.28966 16.7351L7.29024 16.7348L6.52103 15.447ZM3.74103 18.218L2.43087 17.4876L2.43042 17.4884L3.74103 18.218ZM4.34803 19.405L4.65409 17.9366L4.65396 17.9365L4.34803 19.405ZM19.652 19.405L19.958 20.8735C21.3002 20.5938 22.432 19.0375 21.5696 17.4884L20.259 18.218L18.9484 18.9476C18.82 18.7169 18.8379 18.444 18.9408 18.2503C19.0341 18.0745 19.1885 17.9694 19.3461 17.9365L19.652 19.405ZM20.259 18.218L21.5692 17.4876C20.8195 16.1429 19.6654 15.0049 18.2477 14.1589L17.479 15.447L16.7104 16.7351C17.7327 17.3451 18.4866 18.1191 18.9489 18.9484L20.259 18.218ZM17.479 15.447L18.2476 14.1589C16.4244 13.071 14.2279 12.5 12 12.5V14V15.5C13.7322 15.5 15.3896 15.947 16.7104 16.7351L17.479 15.447ZM12 14V12.5C9.77274 12.5 7.57579 13.0697 5.75182 14.1592L6.52103 15.447L7.29024 16.7348C8.61026 15.9463 10.2673 15.5 12 15.5V14ZM6.52103 15.447L5.75239 14.1589C4.33465 15.0049 3.18056 16.1429 2.43087 17.4876L3.74103 18.218L5.05118 18.9484C5.5135 18.1191 6.2674 17.3451 7.28966 16.7351L6.52103 15.447ZM3.74103 18.218L2.43042 17.4884C1.56808 19.0375 2.69981 20.5938 4.0421 20.8735L4.34803 19.405L4.65396 17.9365C4.81159 17.9694 4.96598 18.0745 5.05928 18.2503C5.16212 18.444 5.18008 18.7169 5.05164 18.9476L3.74103 18.218ZM4.34803 19.405L4.04197 20.8734C9.29061 21.9674 14.7084 21.9674 19.9571 20.8734L19.651 19.405L19.345 17.9366C14.5001 18.9464 9.49899 18.9464 4.65409 17.9366L4.34803 19.405Z"
                                fill="currentColor"
                                mask="url(#path-1-inside-1_508_210)"
                            />
                            <path
                                d="M12 3.75C14.3472 3.75 16.25 5.65279 16.25 8C16.25 10.3472 14.3472 12.25 12 12.25C9.65279 12.25 7.75 10.3472 7.75 8C7.75 5.65279 9.65279 3.75 12 3.75Z"
                                fill="currentColor"
                                stroke="currentColor"
                                stroke-width="1.5"
                            />
                        </svg>
                        <span class="navigation-text paragraph"
                            >Account</span
                        ></a
                    >
                </li>
            </ul>
            <div class="account-information">
                <img width="46px" height="46px" alt="account-photo" src="https://i.pinimg.com/564x/3a/3d/4b/3a3d4b04d70cc293fadf195b4e1a7bcb.jpg" class="account-image">
            
                <div class="account-content">
                    <p class="account-name paragraph">John Smith</p>
                    <p class="account-company paragraph">Het Boomstammetje</p>
                </div>
            </div>
        </nav>
    </body>


        <div class="account-content">
          <p class="account-name paragraph">John Smith</p>
          <p class="account-company paragraph">Het Boomstammetje</p>
        </div>
      </div>
    </nav>
  </body>

</html>
`,f=`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Camping beheerder Dashboard</title>
  <link rel="stylesheet" href="src/styles/dashboard.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"><\/script>  
</head>

<body>

  <header class="top">
    <button class="back" onclick="location.href='/admin'">←</button>
    <h1 class="title">Dashboard</h1>
    <input type="date" class="date">
  </header>

  <div class="dashboard">

    <div class="frame frame1" id="reservationsFrame" onclick="location.href='/reserveringen'">
      <h2>Reserveringen</h2>
       <div class="chart-wrapper">
        <canvas id="reservationsChart"></canvas>
      </div>
    </div>
    

    <div class="frame frame2" onclick="location.href='/beschikbaarheid'">
      <div id="availabillity">
        <h2>Beschikbaar</h2>
      </div>
    </div>

    <div class="frame frame3" onclick="location.href='/sanitair'">
      <div id="messages">
        <h2>Messages</h2>
      </div>
    </div>

    <div class="frame frame4" onclick="location.href='/catering'">
      <div id="catering">
        <h2>Catering</h2>
      </div>
    </div>

    <div class="frame frame5" onclick="location.href='/factuur'">
      <div id="invoice">
        <h2>Factuur</h2>
      </div>
    </div>


    <div class="frame frame6" onclick="location.href='/omzet'">
      <div id="turnover">
        <h2>Omzet</h2>
      </div>
    </div>

  </div>

  <script>
  // Dummy data
  const dashboardData = {
    reservations: 18,
    availability: ["12 plekken", "2 accommodaties"],
    messages: "12 ongelezen berichten",
    catering: ["Pistolletjes : 2", "Stokbrood : 25"],
    invoice: "Volgende factuur datum xx/xx/xxxx \\n €420",
    turnover: "€420"
  };
  
  //Reserveringen
  {
  const ctx = document.getElementById("reservationsChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["08/12", "09/12", "10/12", "11/12", "12/12", "13/12", "14/12","08/12", "09/12", "10/12", "11/12", "12/12", "13/12", "14/12","08/12", "09/12", "10/12", "11/12", "12/12", "13/12", "14/12",],
      datasets: [{
        label: "Aantal reserveringen",
        data: [2, 5, 3, 7, 4, 8, 6,2, 5, 3, 7, 4, 8, 6,2, 5, 3, 7, 4, 8, 6,2, 5, 3, 7, 4, 8, 6,], 
        backgroundColor: '#8ED968',
        borderColor: '#8ED968',
        borderWidth: 1,
        borderRadius: 5
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, 
      plugins: { title: { display: true, text: "Reserveringen per dag" } },
      scales: { y: { beginAtZero: true } }
  }
  })
};
  
  // Beschikbaarheid
  {
  const ul = document.createElement("ul");
  dashboardData.availability.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  document.getElementById("availabillity").appendChild(ul)
};
  
  //Berichten
  {
  const p = document.createElement("p");
  p.textContent = dashboardData.messages;
  document.getElementById("messages").appendChild(p)
  };
  
  //Catering
  {
  const ul = document.createElement("ul");
  dashboardData.catering.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  document.getElementById("catering").appendChild(ul)
  };

  //Factuur
  {
  const p = document.createElement("p");
  p.textContent = dashboardData.invoice;
  document.getElementById("invoice").appendChild(p)
  };
  
  //Omzet
  {
  const p = document.createElement("p");
  p.textContent = dashboardData.turnover;
  document.getElementById("turnover").appendChild(p)
  };
  
  <\/script>
  

</body>
</html>
`,y=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanitair</title>
    <link rel="icon" type="image/x-icon" href="/src/assets/favicon.ico">
    <link rel="stylesheet" href="/src/styles/sanitair.css">
</head>
<body>
    <header class="header-bar">
        <button class="back-btn" a href="/frontend/src/pages/sanitair/index.html">&lt;</button>
        <h1>Sanitair beheer</h1>
    </header> 
    <main>
    <section class="inboxes">
        <div class="inbox-main">
            <a href="/sanitair/all-notifications" class="inbox inbox-main">
                <h2>Alle meldingen</h2>                
                <p>5 nieuwe meldingen</p>
            </a>
        </div>

        <div class="inbox-row" >
            <a href="/sanitair/hygiene" class="inbox inbox-type">
                <h3>Hygiëne</h3>
                <p>2 nieuwe meldingen</p>
            </a>
            <a href="/sanitair/defect" class="inbox inbox-type">
                <h3>Defect</h3>
                <p>1 nieuwe melding</p>
            </a>
            <a href="/sanitair/storage" class="inbox inbox-type">
                <h3>Voorraad</h3>
                <p>2 nieuwe meldingen</p> 
            </a>
            <a href="/sanitair/else" class="inbox inbox-type">
                <h3>Anders</h3>
                <p>Geen meldingen</p>
            </a>
        </div>
    </section>
    
</main>
</body>
</html>`,k=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanitair</title>
    <link rel="icon" type="image/x-icon" href="/src/assets/favicon.ico">
    <link rel="stylesheet" href="/src/styles/notifications.css">
</head>
<body>
    <header class="header-bar">
        <button class="back-btn" onclick="history.back()">&lt;</button>
        <h1>Hygiëne</h1>
    </header>
    <main>
    <section class="filter-buttons">
        <div class="row" style="margin-top:16px;">
            <button class="glass-button">Dag</button>
            <button class="glass-button outline">Week</button>
            <button class="glass-button outline">Maand</button>
        </div>
        <div class="row">
            <button class="glass-button active"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style="vertical-align:middle;"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zm11 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
            Toon gelezen berichten</button>
        </div>
    </section>
        
    <section class="inboxes">
        <div class="Ongelezen-inbox">
            <div class="Ongelezen">
                <h2>Hygiëne</h2>
                <p>Locatie: Badkamer</p>
            </div>
        </div>
        <div class="Gelezen-inbox">
            <div class="Gelezen">
                <h2>Probleem #1</h2>
                <p>Locatie: ...</p>
            </div>
            <div class="Gelezen">
                <h2>Probleem #2</h2>
                <p>Locatie: ...</p>
            </div>
            <div class="Gelezen">
                <h2>Probleem #3</h2>
                <p>Locatie: ...</p>
            </div>
        </div>
    </section>
    
</main>
</body>
</html>`,x=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanitair</title>
    <link rel="icon" type="image/x-icon" href="/src/assets/favicon.ico">
    <link rel="stylesheet" href="/src/styles/notifications.css">
</head>
<body>
    <header class="header-bar">
        <button class="back-btn" onclick="history.back()">&lt;</button>
        <h1>Defect</h1>
    </header>
    <main>
    <section class="filter-buttons">
        <div class="row" style="margin-top:16px;">
            <button class="glass-button">Dag</button>
            <button class="glass-button outline">Week</button>
            <button class="glass-button outline">Maand</button>
        </div>
        <div class="row">
            <button class="glass-button active"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style="vertical-align:middle;"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zm11 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
            Toon gelezen berichten</button>
        </div>
    </section>
        
    <section class="inboxes">
        <div class="Ongelezen-inbox">
            <div class="Ongelezen">
                <h2>Defect</h2>
                <p>Locatie: Badkamer</p>
            </div>
        </div>
        <div class="Gelezen-inbox">
            <div class="Gelezen">
                <h2>Probleem #1</h2>
                <p>Locatie: ...</p>
            </div>
            <div class="Gelezen">
                <h2>Probleem #2</h2>
                <p>Locatie: ...</p>
            </div>
            <div class="Gelezen">
                <h2>Probleem #3</h2>
                <p>Locatie: ...</p>
            </div>
        </div>
    </section>
    
</main>
</body>
</html>`,L=`<!DOCTYPE html>
<script src="/src/pages/sanitair/index.js"><\/script>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanitair</title>
    <link rel="icon" type="image/x-icon" href="/src/assets/favicon.ico">
    <link rel="stylesheet" href="/src/styles/notifications.css">
</head>
<body>
    <header class="header-bar">
        <button class="back-btn" onclick="history.back()">&lt;</button>
        <h1>Alle meldingen</h1>
    </header>
    <main>
    <section class="filter-buttons">
        <div class="row" style="margin-top:16px;">
            <button class="glass-button">Dag</button>
            <button class="glass-button outline">Week</button>
            <button class="glass-button outline">Maand</button>
        </div>
        <div class="row">
            <button id="toggleGelezen" class="glass-button active"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style="vertical-align:middle;"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zm11 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
            Toon gelezen berichten</button>
        </div>
    </section>
        
    <section class="inboxes">
        <div id="Ongelezen-inbox" class="Ongelezen-inbox">
            <div class="Ongelezen">
                <h2>Defect</h2>
                <p>Locatie: Badkamer</p>
            </div>
            <div class="Ongelezen">
                <h2>Voorraad</h2>
                <p>Locatie: Douche</p>
            </div>
        </div>
        <div id="Gelezen-inbox" class="Gelezen-inbox">
            <div class="Gelezen">
                <h2>Probleem #1</h2>
                <p>Locatie: ...</p>
            </div>
            <div class="Gelezen">
                <h2>Probleem #2</h2>
                <p>Locatie: ...</p>
            </div>
            <div class="Gelezen">
                <h2>Probleem #3</h2>
                <p>Locatie: ...</p>
            </div>
        </div>
    </section>
    
</main>
</body>
</html>`,M=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanitair</title>
    <link rel="icon" type="image/x-icon" href="/src/assets/favicon.ico">
    <link rel="stylesheet" href="/src/styles/notifications.css">
</head>
<body>
    <header class="header-bar">
        <button class="back-btn" onclick="history.back()">&lt;</button>
        <h1>Voorraad</h1>
    </header>
    <main>
    <section class="filter-buttons">
        <div class="row" style="margin-top:16px;">
            <button class="glass-button">Dag</button>
            <button class="glass-button outline">Week</button>
            <button class="glass-button outline">Maand</button>
        </div>
        <div class="row">
            <button class="glass-button active"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style="vertical-align:middle;"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zm11 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
            Toon gelezen berichten</button>
        </div>
    </section>
        
    <section class="inboxes">
        <div class="Ongelezen-inbox">
            <div class="Ongelezen">
                <h2>Voorraad</h2>
                <p>Locatie: Douche</p>
            </div>
        </div>
        <div class="Gelezen-inbox">
            <div class="Gelezen">
                <h2>Probleem #1</h2>
                <p>Locatie: ...</p>
            </div>
            <div class="Gelezen">
                <h2>Probleem #2</h2>
                <p>Locatie: ...</p>
            </div>
            <div class="Gelezen">
                <h2>Probleem #3</h2>
                <p>Locatie: ...</p>
            </div>
        </div>
    </section>
    
</main>
</body>
</html>`,H=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sanitair</title>
    <link rel="icon" type="image/x-icon" href="/src/assets/favicon.ico">
    <link rel="stylesheet" href="/src/styles/notifications.css">
</head>
<body>
    <header class="header-bar">
        <button class="back-btn" onclick="history.back()">&lt;</button>
        <h1>Anders</h1>
    </header>
    <main>
    <section class="filter-buttons">
        <div class="row" style="margin-top:16px;">
            <button class="glass-button">Dag</button>
            <button class="glass-button outline">Week</button>
            <button class="glass-button outline">Maand</button>
        </div>
        <div class="row">
            <button class="glass-button active"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" style="vertical-align:middle;"><path fill="none" stroke="currentColor" stroke-width="2" d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12zm11 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
            Toon gelezen berichten</button>
        </div>
    </section>
    <section class="no-messages">
        <p>Geen meldingen in deze categorie.</p>
        
    <!--<section class="inboxes">
        <div class="Ongelezen-inbox">
            <div class="Ongelezen">
                <h2>Defect</h2>
                <p>Locatie: Badkamer</p>
            </div>
            <div class="Ongelezen">
                <h2>Voorraad</h2>
                <p>Locatie: Douche</p>
            </div>
        </div>
        <div class="Gelezen-inbox">
            <div class="Gelezen">
                <h2>Probleem #1</h2>
                <p>Locatie: ...</p>
            </div>
            <div class="Gelezen">
                <h2>Probleem #2</h2>
                <p>Locatie: ...</p>
            </div>
            <div class="Gelezen">
                <h2>Probleem #3</h2>
                <p>Locatie: ...</p>
            </div>
        </div>
    </section>
    -->
</main>
</body>
</html>`,B=`<!DOCTYPE html>
<html lang="nl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Boekingsoverzicht</title>
  </head>
  <body>
    <section class="reserveringen">
      <div class="page-header"><h1>Boekingsoverzicht</h1></div>
      <div class="filter-bar">
        <div class="filter-left">
          <div class="search-container">
            <button id="search-toggle" class="icon-button" title="Zoeken">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
            <input
              type="text"
              id="search-input"
              placeholder="Zoek op naam..."
              class="search-input hidden"
            />
          </div>

          <div class="dropdown">
            <button id="sort-toggle" class="icon-button">Sorteer ▼</button>
            <div id="sort-menu" class="dropdown-menu hidden">
              <button data-sort="default">Op boekingen</button>
              <button data-sort="name">Op naam</button>
              <button data-sort="status">Op status</button>
            </div>
          </div>
        </div>

        <button id="open-form-btn" class="icon-button add-reservation">
          <i class="fa-solid fa-plus"></i>
        </button>
      </div>

      <div class="reservations-list"></div>
    </section>

    <template id="reservation-template">
      <div
        class="reservation-block foldable-reservation"
        tabindex="0"
        data-original=""
      >
        <div class="reservation-summary">
          <div class="reservation-summary-top">
            <div class="reservation-title heading-three">
              Boeking <span class="reservation-id"></span>
            </div>
            <div class="reservation-actions">
              <button
                class="edit-button"
                title="Bewerk"
                aria-label="Bewerk reservering"
              >
                <i class="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>
          </div>
          <table class="reserveringen-tabel reservation-summary-table">
            <tbody>
              <tr>
                <th>Naam</th>
                <td class="field-Naam"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="reservation-details" hidden>
          <table class="reserveringen-tabel reservation-details-table">
            <tbody>
              <tr>
                <th>Aankomst</th>
                <td class="field-Aankomst"></td>
              </tr>
              <tr>
                <th>Vertrek</th>
                <td class="field-Vertrek"></td>
              </tr>
              <tr>
                <th>Plaats</th>
                <td class="field-Plaats"></td>
              </tr>
              <tr>
                <th>Contact</th>
                <td class="field-Contact"></td>
              </tr>
              <tr>
                <th>Status</th>
                <td class="field-Status"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>

    <div
      id="reservation-formulier"
      class="formulier hidden"
      role="dialog"
      aria-modal="true"
    >
      <div class="formulier-content">
        <h2>Nieuwe reservering</h2>
        <form id="reservation-form">
          <input name="naam" placeholder="Naam" required />
          <input name="aankomst" type="date" required />
          <input name="vertrek" type="date" required />
          <input name="plaats" placeholder="Plaats" required />
          <input name="contact" placeholder="Contact" required />
          <select name="status" required>
            <option value="In behandeling">In behandeling</option>
            <option value="Bevestigd">Bevestigd</option>
            <option value="Afgewezen">Afgewezen</option>
          </select>
          <button type="submit">Opslaan</button>
          <button type="button" id="close-formulier">Annuleren</button>
          <button
            type="button"
            id="delete-reservation"
            class="delete-reservation"
          >
            Verwijderen
          </button>
        </form>
      </div>
    </div>
    <script type="module" src="/src/pages/admin/modules/bookings.js"><\/script>
  </body>
</html>
`,V=`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bestellingen</title>
    <link rel="stylesheet" href="/src/styles/catering.css">

<body>

    <header class="orders-1">
        <h1 class="mobile-heading-03">Bestellingen</h1>
    </header>


        <!-- Knoppen -->
        <div class="row">
            <button class="filled-button">+Item toevoegen</button>
        </div>

        <div class="container row" style="margin-top:16px; width: 420px;">
            <a class="glass-button" id="ordersBtn" href="/catering">Bestellingen</a>
            <a class="glass-button special" id="bakeryBtn" href="/catering/bakery">Broodjes</a>
        </div>

        <!-- Filters -->
        <div class="row" style="margin-top:16px;">
            <button class="glass-button">Dag</button>
            <button class="glass-button outline">Week</button>
            <button class="glass-button outline">Maand</button>
            <button class="glass-button outline">Jaar</button>
        </div>

        <!-- Tabel -->
        <div class="container" style="margin-top:24px;">
            <table style="width:100%; border-collapse: collapse;">
                <thead>
                    <tr class="row outlined">
                        <th class="mobile-paragraph date">Datum</th>
                        <th class="mobile-paragraph items">Bestelling</th>
                        <th class="mobile-paragraph amount">Aantal</th>
                    </tr>
                </thead>
                <tbody>

                    </tr>
                        <tr class="row">
                        <td class="mobile-paragraph date"><a id="monday" href="/catering/orders">Ma 22 Sep</a></td>
                        <td class="mobile-paragraph items">#988334</td>
                        <td class="mobile-paragraph amount">75x</td>
                    </tr>
                    <tr class="row">
                        <td class="mobile-paragraph date"><button id="tuesday">Di 25 Sep</button></td>
                        <td class="mobile-paragraph items">#655334</td>
                        <td class="mobile-paragraph amount">25x</td>
                    </tr>
                    <tr class="row">
                        <td class="mobile-paragraph date"><button id="wednesday">Wo 24 Sep</button></td>
                        <td class="mobile-paragraph items">#344556</td>
                        <td class="mobile-paragraph amount">75x</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>

    <script src="/src/catering.js"><\/script>

</body>

<script>
    document.addEventListener('DOMContentLoaded', () => {

// Function to add navigation links
function addThisLink(id, link) {
    const knop = document.getElementById(id);
    if (knop) { // check if the button exists on this page
        knop.addEventListener('click', () => {
            window.location.href = link;
        });
    }
}

// Basic buttons
addThisLink('ordersBtn', 'catering.html');
addThisLink('bakeryBtn', 'cat_bakery.html');

// days buttons
addThisLink('monday', 'cat_orders.html');
addThisLink('tuesday', 'cat_orders.html');
addThisLink('wednesday', 'cat_orders.html');

// ID and link
});
<\/script>

</html>`,z=`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Overzicht</title>
    <link rel="stylesheet" href="/src/styles/catering.css">
</head>

<body>

    <header class="orders-1">
        <h1 class="mobile-heading-03">Overzicht</h1>
    </header>


        <!-- Knoppen -->
        <div class="row">
            <button class="filled-button">+Item toevoegen</button>
        </div>

        <div class="container row" style="margin-top:16px; width: 420px;">
            <a class="glass-button" id="ordersBtn" href="/catering">Bestellingen</a>
            <a class="glass-button special" id="bakeryBtn" href="/catering/bakery">Broodjes</a>
        </div>

        <!-- Filters -->
        <div class="row" style="margin-top:16px;">
            <button class="glass-button">Dag</button>
            <button class="glass-button outline">Week</button>
            <button class="glass-button outline">Maand</button>
            <button class="glass-button outline">Jaar</button>
        </div>
        
        <!-- Tabel -->
        <div class="container" style="margin-top:24px;">
            <table style="width:100%; border-collapse: collapse;">
                <thead>
                    <tr class="row outlined">
                        <th class="mobile-paragraph datum">Datum</th>
                        <th class="mobile-paragraph items">Item</th>
                        <th class="mobile-paragraph aantal">Aantal</th>
                    </tr>
                </thead>
                    <header class="bestellingen-1">
                        <h2 class="mobile-heading-04">Maandag 22 Sep</h2>
                    </header>
                <tbody>
                    <tr class="row">
                        <td class="mobile-paragraph date">22/09/25</td>
                        <td class="mobile-paragraph items">Croissant</td>
                        <td class="mobile-paragraph amount">25x</td>
                    </tr>
                    <tr class="row">
                        <td class="mobile-paragraph date">22/09/25</td>
                        <td class="mobile-paragraph items">Stokbrood</td>
                        <td class="mobile-paragraph amount">25x</td>
                    </tr>
                    <tr class="row">
                        <td class="mobile-paragraph date">22/09/25</td>
                        <td class="mobile-paragraph items">Frikandelbroodje</td>
                        <td class="mobile-paragraph amount">25x</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>

    <script src="/src/catering.js"><\/script>

</body>

</html>`,P=`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Broodjes</title>
    <link rel="stylesheet" href="/src/styles/catering.css">
</head>

<body>

    <header class="orders-1">
        <h1 class="mobile-heading-03">Broodjes</h1>
    </header>

    <!-- Knoppen -->
    <div class="row">
        <button class="filled-button">+Item toevoegen</button>
    </div>

    <div class="container row" style="margin-top:16px; width: 420px;">
        <a class="glass-button special" id="ordersBtn" href="/catering/">Bestellingen</a>  
        <button class="glass-button" id="bakeryBtn">Broodjes</button>
    </div>

    <!-- Tabel -->
    <div class="container" style="margin-top:24px;">
        <table style="width:100%; border-collapse: collapse;">
            <div class="grid-container">
                <div class="item">
                    <img src="frikandelbroodje-met-currysaus.jpg" alt="Image" class="item-image">
                    <p class="item-name">Frikandelbroodje</p>
                    <p class="item-price">€2,50</p>
                </div>
                <div class="item">
                    <img src="b60097_img1f.webp" alt="Image" class="item-image">
                    <p class="item-name">Kaasbroodje</p>
                    <p class="item-price">€2,50</p>
                </div>
                <div class="item">
                    <img src="2891-Stokbroodje-wit.jpg" alt="Image" class="item-image">
                    <p class="item-name">Pistolet</p>
                    <p class="item-price">€1,50</p>
                </div>
                <div class="item">
                    <img src="Croissant-Petr_Kratochvil.jpg" alt="Image" class="item-image">
                    <p class="item-name">Croissant</p>
                    <p class="item-price">€3,50</p>
                </div>
            </div>

            <script src="/src/catering.js"><\/script>

</body>

</html>`,Z=[{path:"/",document:C},{path:"/admin",document:w},{path:"/dashboard",document:f},{path:"/sanitair",document:y},{path:"/sanitair/hygiene",document:k},{path:"/sanitair/defect",document:x},{path:"/sanitair/all-notifications",document:L},{path:"/sanitair/storage",document:M},{path:"/sanitair/else",document:H},{path:"/reserveringen",document:B},{path:"/catering",document:V},{path:"/catering/orders",document:z},{path:"/catering/bakery",document:P}];new b(Z,{fallback:"/"});
