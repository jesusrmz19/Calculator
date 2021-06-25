import Head from 'next/head';
import styled from 'styled-components';
import Page from '../components/Page';
import ButtonStyles from '../components/styles/Button';
import CalcContainer from '../components/styles/CalcContainer';
import NumpadStyle from '../components/styles/Numpad';
import ScreenStyles from '../components/styles/Screen';
import buttons from '../lib/calculator-buttons';
import newBtns from '../lib/calculator-btn-obj';

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
  return (
    <Page>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
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
          <ScreenStyles></ScreenStyles>
          <NumpadStyle>
            {Object.keys(newBtns).map((button) => {
              return <ButtonStyles>{newBtns[button].value}</ButtonStyles>;
            })}
            {/* {buttons.map((button) => {
              return (
                <ButtonStyles key={button} value={button}>
                  {button}
                </ButtonStyles>
              );
            })} */}
          </NumpadStyle>
        </CalcContainer>
      </MainContainer>
    </Page>
  );
}
