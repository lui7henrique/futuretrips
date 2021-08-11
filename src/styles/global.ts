import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #8257E6;
    --background: #121015;
    --white: #eeeeee;
    --shape: #0B0B0D;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
     background: var(--background);
    color: var(--white);
  }

  body {
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p, a {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight);
  }
`
