import React from 'react';
import styled, { keyframes } from 'styled-components';
import Typography from '../elements/Typography';
import logo from '../static/images/zeroInfo/logo.svg';
import divider from '../static/images/zeroInfo/green_divider.svg';
import char2 from '../static/images/zeroInfo/char_2.png';
import divider2 from '../static/images/zeroWasteInfo/green_divider.svg';
import callOut from '../static/images/zeroWasteInfo/callOut.png';
import RoundButton from '../elements/RoundButton';
import arrow from '../static/images/diary/arrow.png';

const ZeroInfo = () => {
  return (
    <Container>
      <div
        style={{
          backgroundColor: '#D29BBA',
          width: '100%',
          height: '100%',
          paddingTop: '7em',
          paddingBottom: '5em',
          marginBottom: '5em',
        }}>
        <Typography
          size="3.4rem"
          margin="0 0 5% 0"
          color="white"
          lineHeight="45px">
          지구가 필요한 건<br />
          바로 <span style={{ color: '#078d68' }}>우리</span>!
        </Typography>
        <img src={divider2} style={{ width: '65%' }} />
        <img src={callOut} style={{ width: '85%', margin: '10% 0 10% 0' }} />
        <Typography
          type="AppleSDGothicB00"
          slze="1.6rem"
          color="white"
          lineHeight="24px">
          아직 자신은 없지만, 지구를 위하는 마음과
          <br />
          행동할 용기가 있는 우리 모두에게
          <br />
        </Typography>
        <Typography type="AppleSDGothicB00" color="white">
          ‘쓰레기 생산자’에서
          <br />
          ‘제로인구’로의 이동을 제안합니다.
        </Typography>
      </div>
      <img src={logo} />
      <Typography size="3.4rem" margin="5% 0 5% 0">
        제로인구란?
      </Typography>
      <img src={divider} />
      <Typography
        size="1.6rem"
        type="AppleSDGothicNeoB00"
        margin="5% 0 5% 0"
        lineHeight="24px">
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
        <Typography
          color="white"
          type="AppleSDGothicB00"
          size="1.6rem"
          lineHeight="24px">
          이제 막 제로인으로 거듭난 당신을 위해,
          <br />
          제로인구로 팀이 준비한 선물!{' '}
        </Typography>
        <Typography color="white" size="4.2rem" lineHeight="54px">
          매일제로
          <br />
          다이어리 set
        </Typography>

        <RoundButton backgroundColor="white" textColor="#078D68">
          다이어리 구경하기
        </RoundButton>
        <div
          style={{
            width: '100%',
            height: '5em',
            position: 'relative',
          }}>
          <Animation src={arrow} style={{ width: '10%' }} />
        </div>
        <Typography
          size="1.6rem"
          color="white"
          type="AppleSDGothicNeoB00"
          margin="0">
          무료 굿노트 다이어리 양식 다운로드 받기
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
  background-color: white;
  overflow: hidden;
`;

const move = keyframes`{
  from {
    top: 30%;
  }
  to {
    top: 0%;
  }
}
`;

const Animation = styled.img`
  animation: ${move} 1s linear infinite;
  position: absolute;
  left: 45%;
`;

export default ZeroInfo;
