import React from 'react';
import styled from 'styled-components';
import GetLottie from '../../elements/Lottie';
import MoveText from '../../elements/MoveText';
import Topbar from '../../elements/Topbar';
import char1 from '../../static/images/home/char_1.webp';
import mainLogo from '../../static/images/home/main_logo.webp';
// import party from '../../static/images/home/party_1.png';

const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Topbar />
      <FlexContainer>
        <GetLottie />
        {/* <img
          src={party}
          style={{ width: '96%', position: 'absolute', zIndex: 1 }}
        /> */}
        <div style={{ padding: '15% 10%', zIndex: 3 }}>
          <img src={mainLogo} style={{ width: '100%' }} />
        </div>
        <div style={{ width: '100%', zIndex: 3 }}>
          <img
            src={char1}
            style={{ width: '150%', margin: '-33% 0 -20px -55px' }}
          />
          <div
            style={{
              backgroundColor: '#078D68',
              width: '100%',
              height: '5em',
              zIndex: 6,
            }}
          />
        </div>
      </FlexContainer>
      <MoveText />
    </div>
  );
};

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
  position: relative;
`;

export default Home;
