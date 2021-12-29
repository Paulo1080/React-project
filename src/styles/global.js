import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;

    }

    body {
        background-color: red ;
    }

    body, input, select {
        font-family: 'inter', sans-serif;
    }
`