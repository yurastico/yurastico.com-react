import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #FFFFFF;
        --black: #000000;
        --background: #10002B;
        --primary: #E91C5D;
        --secundary: #240046;
        --text-color: #E0AAFF;
    }
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
    }

    h1 {
        font-size: 1.6rem;
    }
    
    body {
        background: var(--background);
    }
    
    button {
        cursor: pointer;
    }
`

export { GlobalStyles }