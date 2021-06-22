import Head from 'next/head';
import styled from 'styled-components';
import Page from '../components/Page';
import ButtonStyles from '../components/styles/Button';
import CalcContainer from '../components/styles/CalcContainer';
import NumpadStyle from '../components/styles/Numpad';
import ScreenStyles from '../components/styles/Screen';
import buttons from '../lib/calculator-buttons';

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
            {buttons.map((button) => {
              return (
                <ButtonStyles
                  key={button}
                  value={button}
                  className={
                    button == 'reset' || button == '=' ? 'big--btn' : null
                  }
                >
                  {button}
                </ButtonStyles>
              );
            })}
            ;
          </NumpadStyle>
        </CalcContainer>
      </MainContainer>
    </Page>
  );
}
