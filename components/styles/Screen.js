import styled from 'styled-components';

const ScreenStyles = styled.div`
  background: var(--screenbg);
  height: 100px;
  width: 100%;
  border-radius: 10px;
  grid-column: 1/-1;
  grid-row: 2;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    color: white;
    font-size: var(--fontsizenum);
    text-align: right;
    padding: 1.2rem;
  }
`;

export default ScreenStyles;
