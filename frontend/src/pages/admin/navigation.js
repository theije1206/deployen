export const navigation = `
<nav class="navigation">
    <ul class="navigation-list">
        <li class="navigation-item">
            <a class="navigation-content" href="/admin">
                <svg class="navigation-icon" width="24" height="24"
                    viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.1111 15.1111C13.1111 14.0065 14.0065 13.1111 15.1111 13.1111H20C21.1046 13.1111 22 14.0065 22 15.1111V20C22 21.1046 21.1046 22 20 22H15.1111C14.0065 22 13.1111 21.1046 13.1111 20V15.1111ZM15.1111 10.8889C14.0065 10.8889 13.1111 9.99346 13.1111 8.88889V4C13.1111 2.89543 14.0065 2 15.1111 2H20C21.1046 2 22 2.89543 22 4V8.88889C22 9.99346 21.1046 10.8889 20 10.8889H15.1111ZM10.8889 8.88889C10.8889 9.99346 9.99346 10.8889 8.88889 10.8889H4C2.89543 10.8889 2 9.99346 2 8.88889V4C2 2.89543 2.89543 2 4 2H8.88889C9.99346 2 10.8889 2.89543 10.8889 4V8.88889ZM8.88889 13.1111C9.99346 13.1111 10.8889 14.0065 10.8889 15.1111V20C10.8889 21.1046 9.99346 22 8.88889 22H4C2.89543 22 2 21.1046 2 20V15.1111C2 14.0065 2.89543 13.1111 4 13.1111H8.88889Z"
                        fill="currentColor"/>
                </svg>
                <span class="navigation-text paragraph">Overzicht</span>
            </a>
        </li>
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
                <svg class="navigation-icon" width="24" height="24"
                    viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.5 3L19 8.5V20C19 20.55 18.55 21 18 21H6C5.45 21 5 20.55 5 20V4C5 3.45 5.45 3 6 3H13.5Z"
                        fill="currentColor"/>
                </svg>
                <span class="navigation-text paragraph">Pagina's</span>
            </a>
        </li>
        <li class="navigation-item">
            <a class="navigation-content" href="/admin/messages">
                <svg class="navigation-icon" width="24" height="24"
                    viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M5 2.565H19C19.7956 2.565 20.5587 2.88107 21.1213 3.44368C21.6839 4.00629 22 4.76935 22 5.565V13.565C22 14.3606 21.6839 15.1237 21.1213 15.6863C20.5587 16.2489 19.7956 16.565 19 16.565H12.042L5.598 21.373C5.44922 21.484 5.27248 21.5514 5.08756 21.5677C4.90265 21.5839 4.71686 21.5484 4.551 21.465C4.38513 21.3817 4.24574 21.2538 4.14843 21.0957C4.05111 20.9377 3.99972 20.7556 4 20.57V16.564C3.46957 16.564 2.96086 16.3533 2.58579 15.9782C2.21071 15.6031 2 15.0944 2 14.564V5.564C2 4.76835 2.31607 4.00529 2.87868 3.44268C3.44129 2.88007 4.20435 2.565 5 2.565Z"
                        fill="currentColor"/>
                </svg>
                <span class="navigation-text paragraph">Berichten</span>
            </a>
        </li>
        <li class="navigation-item" id="navigation-account-button">
            <a class="navigation-content" href="#">
                <svg class="navigation-icon" width="24" height="24"
                    viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 3.75C14.3472 3.75 16.25 5.65279 16.25 8C16.25 10.3472 14.3472 12.25 12 12.25C9.65279 12.25 7.75 10.3472 7.75 8C7.75 5.65279 9.65279 3.75 12 3.75Z"
                        fill="currentColor" stroke="currentColor" stroke-width="1.5"/>
                </svg>
                <span class="navigation-text paragraph">Account</span>
            </a>
        </li>
    </ul>
    <div class="account-information">
        <img width="46px" height="46px" alt="account-photo"
            src="https://i.pinimg.com/564x/3a/3d/4b/3a3d4b04d70cc293fadf195b4e1a7bcb.jpg"
            class="account-image" />
        <div class="account-content">
            <p class="account-name paragraph">John Smith</p>
            <p class="account-company paragraph">Het Boomstammetje</p>
        </div>
    </div>
</nav>
`;