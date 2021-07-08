import styled from 'styled-components';

const ThemeSwitchStyles = styled.div`
  display: flex;
  input {
    position: absolute;
    top: -10000px;
    left: 0;
    opacity: 0;
  }
  .theme {
    align-self: flex-end;
    margin-right: 20px;
    font-size: 12px;
  }
  .toggle {
    p {
      font-size: 12px;
    }
    &--num {
      display: flex;
      justify-content: space-around;
      margin-bottom: 5px;
    }
    &--switch {
      position: relative;
      border-radius: 10px;
      padding: 0 4px;
      background: var(--screenbg);
      height: 20px;
      width: 58px;
      input:checked + label {
        opacity: 1;
      }
      label {
        opacity: 0;
        cursor: pointer;
        position: absolute;
        top: calc(50% - 6px);
        height: 12px;
        width: 12px;
        border-radius: 50%;
        background: var(--keyredbg);
      }
      .label-two {
        left: calc(50% - 6px);
      }
      .label-three {
        right: calc(0% + 3px);
      }
    }
  }
`;

export default ThemeSwitchStyles;
