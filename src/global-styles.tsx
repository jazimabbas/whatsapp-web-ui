import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
            "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #4a4a4a;
        overflow: hidden;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: inherit;
        font-weight: 400;
    }

    a,
    a:active,
    a:hover {
        font-size: inherit;
        font-family: inherit;
        font-weight: inherit;
        text-decoration: none;
        color: inherit;
    }

    button {
        cursor: pointer;
    }

    button,
    input {
        border: none;
        background-color: transparent;
    }

    ul {
        list-style: none;
    }

    ::-webkit-scrollbar {
        width: 6px !important;
        height: 6px !important;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0.2);
    }

    ::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
    }
`;

export default GlobalStyle;
