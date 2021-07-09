import styled from 'styled-components';

const CalcContainer = styled.div`
  background: var(--mainbg);
  width: 375px;
  padding: 1.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 765px) {
    width: 520px;
  }
`;

export default CalcContainer;
