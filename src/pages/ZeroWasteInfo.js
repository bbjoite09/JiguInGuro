import React from 'react';
import styled from 'styled-components';
import Typography from '../elements/Typography';
import divider1 from '../static/images/zeroWasteInfo/pink_divider.svg';
import divider2 from '../static/images/zeroWasteInfo/green_divider.svg';
import char3 from '../static/images/zeroWasteInfo/char_3.png';
import char4 from '../static/images/zeroWasteInfo/char_4.png';
import char5 from '../static/images/zeroWasteInfo/char_5.png';
import callOut from '../static/images/zeroWasteInfo/callOut.png';

const ZeroInfo = () => {
  return (
    <Container>
      <div
        style={{ display: 'flex', flexDirection: 'column', marginLeft: '10%' }}>
        <Typography
          size="3.4rem"
          textAlign="left"
          margin="5% 0 5% 0"
          color="white">
          제로웨이스트,
          <br />
          <span style={{ color: '#D89EBE' }}>아직도</span> 멀게만
          <br />
          느껴지시나요?
        </Typography>
        <img src={divider1} style={{ width: '60%' }} />
        <img src={char3} style={{ width: '90%', marginTop: '15%' }} />
        <img src={char4} style={{ width: '90%', margin: '1% 0 3% 3%' }} />
        <img src={char5} style={{ width: '85%', marginBottom: '20%' }} />
      </div>
      <div
        style={{
          backgroundColor: '#D29BBA',
          width: '100%',
          height: '100vh',
          paddingTop: '5em',
        }}>
        <Typography size="3.4rem" margin="5% 0 5% 0" color="white">
          지구가 필요한 건<br />
          바로 <span style={{ color: '#078d68' }}>우리</span>!
        </Typography>
        <img src={divider2} style={{ width: '70%' }} />
        <img src={callOut} style={{ width: '85%', margin: '10% 0 10% 0' }} />
        <Typography type="AppleSDGothicB00" color="white">
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
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #078d68;
  overflow: hidden;
  padding-top: 5em;
`;

export default ZeroInfo;
