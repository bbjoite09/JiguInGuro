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
      <div style={{}}>
        <Typography size={'54px'} margin={'0px'}>
          제로인구로
        </Typography>
        <Typography
          type={'AppleSDGothicNeoB00'}
          size={'15px'}
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
          height: '2em',
          lineHeight: '2em',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}>
        <AnimationText color={'white'} animation>
          #매일제로 #매일제로 #매일제로 #매일제로 #매일제로
        </AnimationText>
      </div>
    </FlexContainer>
  );
};

const move = keyframes`{
  from{
    transform:translateX(100%);
    -moz-transform:translateX(100%);
    -webkit-transform:translateX(100%);
    -o-transform:translateX(100%);
    -ms-transform:translateX(100%);
  }
  to{
    transform:translateX(-100%);
    -moz-transform:translateX(-100%);
    -webkit-transform:translateX(-100%);
    -o-transform:translateX(-100%);
    -ms-transform:translateX(-100%);
  }
}`;

const AnimationText = styled.p`
  margin: 0;
  font-family: Cafe24Ssurround;
  color: white;
  position: absolute;
  bottom: 0;
  font-size: 17px;
  animation: ${move} 10s infinite;
`;

const FlexContainer = styled.div`
  max-width: 500px;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  justify-content: space-between;
`;

export default Home;
