import styled from 'styled-components';

const NumpadStyle = styled.div`
  width: 100%;
  min-height: 380px;
  background: var(--screenbg);
  border-radius: 10px;
  padding: 1rem 1.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: var(--bluetxt);
  button[value='del'],
  button[value='reset'] {
    background: var(--keybluebg);
    box-shadow: 0 5px var(--keyblueshadow);
    font-size: 18px;
    color: white;
    font-family: var(--font);
    text-transform: uppercase;
  }
  button[value='reset'] {
    flex: 2;
  }
  button[value='='] {
    flex: 2;
    background: var(--keyredbg);
    box-shadow: 0 5px var(--keyredshadow);
    font-size: 18px;
    color: white;
    font-family: var(--font);
    margin-left: 12px;
  }
`;

export default NumpadStyle;
