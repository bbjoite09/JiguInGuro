import React from 'react';
import styled, { keyframes } from 'styled-components';
import Typography from '../elements/Typography';
const Home = () => {
  return (
    <FlexContainer>
      <div
        style={{
          textAlign: 'left',
          alignSelf: 'flex-start',
        }}>
        <Typography margin={'2em 0 0 2em'}># 매일제로</Typography>
      </div>
      <div style={{ padding: '0 2em' }}>
        <Typography size={'5.4rem'} margin={'0px'}>
          제로인구로
        </Typography>
        <Typography
          type={'AppleSDGothicNeoB00'}
          styles={{ 'font-color': 'yellow' }}>
          제로웨이스트 라이프를 위한
          <br />
          디지털 다꾸 챌린지
        </Typography>
      </div>
      <div
        style={{
          justifySelf: 'flex-end',
          backgroundColor: '#078D68',
          width: '100%',
          height: '4.5em',
          lineHeight: '4.5em',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}>
        <AnimationText>
          #매일제로 #매일제로 #매일제로 #매일제로 #매일제로 #매일제로 #매일제로
          #매일제로
        </AnimationText>
      </div>
    </FlexContainer>
  );
};

const move = keyframes`{
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: -150%;
    width: 100%;
  }
}`;

const AnimationText = styled.p`
  margin: 0;
  font-family: Cafe24Ssurround;
  color: white;
  font-size: 1.4rem;
  animation: ${move} 10s infinite;
`;

const FlexContainer = styled.div`
  max-width: 500px;
  height: 100vh;
  max-height: -webkit-fill-available;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: white;
`;

export default Home;
