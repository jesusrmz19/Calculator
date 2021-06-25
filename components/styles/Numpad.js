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
  .btn--del {
    background: var(--keybluebg);
    box-shadow: 0 5px var(--keyblueshadow);
    font-size: 18px;
    color: white;
    font-family: var(--font);
  }
`;

export default NumpadStyle;
