import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import { themeOne, themeTwo } from '../lib/themes';
import ButtonStyles from '../components/styles/Button';
import CalcContainer from '../components/styles/CalcContainer';
import NumpadStyle from '../components/styles/Numpad';
import ScreenStyles from '../components/styles/Screen';
import ThemeSwitchStyles from '../components/styles/ThemeSwitch';
import { buttons } from '../lib/calculator-buttons';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
  --mobile: 375px;
  --desktop: 1440px;
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
  --white: hsl(0, 0, 100%);
  --bluetxt: ${({ theme }) => theme.text};
  --font: 'Spartan', sans-serif;
  background: var(--mainbg);
`;

const CalcHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  p {
    font-size: 15px;
    text-transform: uppercase;
  }
`;

export default function Home() {
  let currentNum = '';
  const regex = /\d/;
  const resettingRef = useRef(false);
  const [acc, setAcc] = useState('');
  const [secondDigit, setSecondDigit] = useState(false);
  const [screenValue, setScreenValue] = useState('0');
  const [operation, setOperation] = useState('none');

  const getResult = function () {
    resettingRef.current = true;
    setSecondDigit(false);
    if (operation === 'none') return;
    let result = eval(acc + operation + screenValue);
    if (result % 1 == 0) {
      setAcc(String(result));
    } else {
      setAcc(String(result.toFixed(3)));
    }
  };

  useEffect(() => {
    if (resettingRef.current) {
      resettingRef.current = false;
      displayNum();
    }
  }, [acc]);

  const displayNum = function () {
    resettingRef.current = true;
    setScreenValue(acc);
  };

  useEffect(() => {
    if (resettingRef.current) {
      resettingRef.current = false;
      if (setOperation === 'none') setAcc('');
    }
  }, [screenValue]);

  const keepNum = function (e) {
    currentNum += e.target.innerText;
    if (operation !== 'none') {
      console.log('SECOND NUMBER');
      if (!secondDigit) {
        setSecondDigit(true);
        setScreenValue(currentNum);
      } else {
        setScreenValue(screenValue + currentNum);
      }
    } else {
      if (screenValue === '0' || acc !== '') {
        setScreenValue(currentNum);
      } else {
        setScreenValue(screenValue + currentNum);
      }
    }
  };

  const resetCalc = function () {
    currentNum = '';
    setAcc('');
    setScreenValue('0');
    setOperation('none');
    setSecondDigit(false);
  };

  const delNum = function () {
    if (operation !== 'none') return;
    if (screenValue === '0') return;
    let newNum = screenValue.slice(0, -1);
    setScreenValue(newNum);
  };

  const handleClick = function (e) {
    let localOperation = e.target.innerText;
    if (localOperation === 'x') localOperation = '*';
    switch (localOperation) {
      case 'RESET':
        resetCalc();
        break;
      case 'DEL':
        delNum();
        break;
      case '=':
        setOperation('none');
        getResult();
        break;
      default:
        if (screenValue === '0') return;
        if (acc !== '' && operation !== 'none') {
          setOperation(localOperation);
          getResult();
          return;
        }
        setOperation(localOperation);
        setAcc(screenValue);
    }
  };

  const toggleSwitch = function (e) {
    console.log('switch!');
  };

  return (
    <Page>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap"
          rel="stylesheet"
        ></link>
        <title>Calculator</title>
      </Head>
      <MainContainer theme={themeOne}>
        <CalcContainer>
          <CalcHeader>
            <h1 aria-label="calculator">calc</h1>
            <ThemeSwitchStyles>
              <p class="theme">theme</p>
              <div class="toggle">
                <div class="toggle--num">
                  <p>1</p>
                  <p>2</p>
                  <p>3</p>
                </div>
                <div class="toggle--switch">
                  <input id="1" name="theme" type="radio" checked="checked" />
                  <label class="label-one" for="1" onClick={toggleSwitch} />
                  <input id="2" name="theme" type="radio" checked="" />
                  <label class="label-two" for="2" onClick={toggleSwitch} />
                  <input id="3" name="theme" type="radio" checked="" />
                  <label class="label-three" for="3" onClick={toggleSwitch} />
                </div>
              </div>
            </ThemeSwitchStyles>
          </CalcHeader>
          <ScreenStyles>
            <p>{screenValue}</p>
          </ScreenStyles>
          <NumpadStyle>
            {buttons.map((button) => {
              if (!isNaN(button) || button == '.') {
                return (
                  <ButtonStyles key={button} value={button} onClick={keepNum}>
                    {button}
                  </ButtonStyles>
                );
              } else {
                return (
                  <ButtonStyles
                    key={button}
                    value={button === 'x' ? '*' : button}
                    onClick={handleClick}
                  >
                    {button}
                  </ButtonStyles>
                );
              }
            })}
          </NumpadStyle>
        </CalcContainer>
      </MainContainer>
    </Page>
  );
}
