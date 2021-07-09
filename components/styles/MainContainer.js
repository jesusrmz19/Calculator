import styled from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  --mobile: 375px;
  --desktop: 760px;
  --mainbg: ${({ theme }) => theme.mainbg};
  --darksatblue2: ${({ theme }) => theme.togglebg};
  --screenbg: ${({ theme }) => theme.screenbg};
  --keybluebg: ${({ theme }) => theme.sidekeybg};
  --keyblueshadow: ${({ theme }) => theme.sidekeyshadow};
  --keyredbg: ${({ theme }) => theme.equalkeybg};
  --keyredshadow: ${({ theme }) => theme.equalkeyshadow};
  --keygraybg: ${({ theme }) => theme.mainkeybg};
  --keygrayshadow: ${({ theme }) => theme.mainkeyshadow};
  box-sizing: border-box;
  --fontsizenum: 32px;
  --padtxt: ${({ theme }) => theme.text};
  --restoftxt: ${({ theme }) => theme.restoftxt};
  --font: 'Spartan', sans-serif;
  background: var(--mainbg);
`;

export default MainContainer;
