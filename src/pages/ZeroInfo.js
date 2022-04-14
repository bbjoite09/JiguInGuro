import React from 'react';
import styled from 'styled-components';
import Typography from '../elements/Typography';
import logo from '../static/images/zeroInfo/logo.svg';
import divider from '../static/images/zeroInfo/green_divider.svg';
import char2 from '../static/images/zeroInfo/char_2.png';

const ZeroInfo = () => {
  return (
    <Container id="proInfo">
      <img src={logo} />
      <Typography size="3.4rem" margin="5% 0 5% 0">
        제로인구란?
      </Typography>
      <img src={divider} />
      <Typography type="AppleSDGothicNeoB00" margin="5% 0 0 0">
        불필요한 쓰레기 배출을 줄이고, 처음부터 <br />
        쓰레기를 만들지 않는 제로웨이스트(zero + waste) <br />
        라이프 스타일을 실천하는 사람을 의미해요.
      </Typography>
      <img src={char2} style={{ width: '100%', marginTop: '5%' }} />
      <div
        style={{
          backgroundColor: '#078D68',
          width: '100%',
          height: '100vh',
          marginTop: '-2em',
          paddingTop: '5em',
        }}>
        <Typography color="white" type="AppleSDGothicB00">
          제로인들을 위한 선물
        </Typography>
        <Typography color="white" size="3.4rem">
          매일제로
          <br />
          다이어리 set
        </Typography>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: white;
  overflow: hidden;
  margin-top: 5em;
`;

export default ZeroInfo;
