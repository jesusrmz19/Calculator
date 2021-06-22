import styled from 'styled-components';

const NumpadStyle = styled.div`
  width: 100%;
  height: 300px;
  background: var(--screenbg);
  border-radius: 5px;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  .big--btn {
    flex: 2;
  }
`;

export default NumpadStyle;
