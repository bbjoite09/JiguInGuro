import React from 'react';
import styled, { keyframes } from 'styled-components';
import Topbar from '../elements/Topbar';
import char1 from '../static/images/home/char_1.png';
import mainLogo from '../static/images/home/main_logo.png';
const Home = () => {
  return (
    <>
      <Topbar />
      <FlexContainer id="main">
        <div style={{ padding: '10% 10%' }}>
          <img src={mainLogo} style={{ width: '90%' }} />
        </div>
        <div style={{ width: '100%' }}>
          <img
            src={char1}
            style={{ width: '130%', margin: '-20% 0 -20px -15px' }}
          />
          <div
            style={{
              backgroundColor: '#078D68',
              width: '100%',
              height: '4em',
            }}
          />
          <div
            style={{
              backgroundColor: 'white',
              width: '100%',
              height: '2.5em',
              lineHeight: '2.5em',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}>
            <AnimationText>
              #제로인구로 #제로in구로 #제로인구로 #제로in구로 #제로인구로
            </AnimationText>
          </div>
        </div>
      </FlexContainer>
    </>
  );
};
const move = keyframes`{
  from {
    margin-left: 100%;
  }
  to {
    margin-left: -150%;
  }
}`;

const AnimationText = styled.p`
  margin: 0;
  font-family: Cafe24Ssurround;
  color: #078d68;
  font-size: 1.4rem;
  animation: ${move} 5s linear infinite;
`;

const FlexContainer = styled.div`
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: white;
  overflow: hidden;
`;

export default Home;
