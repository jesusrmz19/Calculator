import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html {
        ${'' /* font-family: 'Spartan', sans-serif; */}
        --mobile: 375px;
        --desktop: 1440px;
        /* theme one */
        --mainbg: hsl(222, 26%, 31%);      /* main background */
        --darksatblue2: hsl(223, 31%, 20%);     /* toggle bg, keypad bg */
        --screenbg: hsl(224, 36%, 15%);     /* screen bg */
        --keybluebg: hsl(225, 21%, 49%);
        --keyblueshadow: hsl(224, 28%, 35%);
        --keyredbg: hsl(6, 63%, 50%);
        --keyredshadow: hsl(6, 70%, 34%);
        --keygraybg: hsl(30, 25%, 89%);
        --keygrayshadow: hsl(28, 16%, 65%);
        box-sizing: border-box;
        --fontsizenum: 32px;
    }
    *, *:before, *:after {box-sizing: inherit;}
    body {
        padding: 0;
        margin: 0;
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
