import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import ButtonStyles from '../components/styles/Button';
import CalcContainer from '../components/styles/CalcContainer';
import NumpadStyle from '../components/styles/Numpad';
import ScreenStyles from '../components/styles/Screen';
import { buttons } from '../lib/calculator-buttons';

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;
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
  let baseNum = 0;
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const resettingRef = useRef(false);
  const [acc, setAcc] = useState(0);
  const [screenValue, setScreenValue] = useState('0');
  const [operation, setOperation] = useState('none');

  const getResult = function () {
    //resettingRef.current = true;
    setAcc(eval(acc + operation + b));
  };

  const displayNum = function () {
    console.log(`SCREEN == ${acc}`);
  };

  const keepNum = function (e) {
    currentNum += e.target.innerText;
    if (screenValue === '0' || acc !== 0) {
      setScreenValue(currentNum);
    } else {
      setScreenValue(screenValue + currentNum);
    }
  };

  const resetCalc = function () {
    setA(0);
    setB(0);
    setAcc(0);
    setScreenValue('0');
    setOperation('none');
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
        resettingRef.current = true;
        setB(+screenValue);
        getResult();
        break;
      default:
        if (screenValue === '0') return;
        if (acc !== 0) {
          setB(+screenValue);
          getResult();
          return;
        }
        setOperation(localOperation);
        setAcc(+screenValue);
    }
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
      <MainContainer>
        <CalcContainer>
          <CalcHeader>
            <h1>calc</h1>
            <p>theme</p>
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
