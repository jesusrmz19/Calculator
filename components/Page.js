import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        --mobile: 375px;
        --desktop: 1440px;
        box-sizing: border-box;
        --fontsizenum: 32px;
        --font: 'Spartan', sans-serif;
    }
    *, *:before, *:after {box-sizing: inherit;}
    body {
        padding: 0;
        margin: 0;
        font-family: 'Spartan', sans-serif;
    }
    h1, h2, h3, p, ul, li {
        margin: 0;
        padding: 0;
        list-style-type: none;
    }
    button {
      border: none;
      outline: none;
      box-shadow: none;
    }
`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyles />
      <div>{children}</div>
    </>
  );
}
