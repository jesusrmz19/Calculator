import styled from 'styled-components';

const FooterStyles = styled.footer`
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  width: 100px;
  height: 100%;
  a {
    color: var(--restoftxt);
  }
  @media (min-width: 765px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1400px) {
    top: calc(100% - 80px);
    left: 0;
    width: 100%;
    height: 80px;
  }
`;

export default FooterStyles;
