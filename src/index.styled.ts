import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        min-height: 100vh;
        margin: 0;
        background: linear-gradient(to bottom, #0f2c5c 0%, #8e44ad 100%);
        font-family: 'Poppins', sans-serif;
        color: #fff;
    }
`;