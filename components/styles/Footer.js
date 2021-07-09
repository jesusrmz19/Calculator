import styled from 'styled-components';

const FooterStyles = styled.footer`
  position: absolute;
  top: calc(100% - 80px);
  left: 0;
  display: none;
  width: 100%;
  height: 80px;
  a {
    color: var(--restoftxt);
  }
  @media (min-width: 765px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default FooterStyles;
