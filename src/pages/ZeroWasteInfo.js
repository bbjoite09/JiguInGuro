import React from 'react';
import styled from 'styled-components';
import Typography from '../elements/Typography';
import divider from '../static/images/zeroWasteInfo/pink_divider.svg';
import char3 from '../static/images/zeroWasteInfo/char_3.png';
import char4 from '../static/images/zeroWasteInfo/char_4.png';
import char5 from '../static/images/zeroWasteInfo/char_5.png';
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
        <img src={divider} style={{ width: '60%' }} />
        <img src={char3} style={{ width: '70%', marginTop: '15%' }} />
        <img src={char4} style={{ width: '70%', margin: '5% 0 7% 10% ' }} />
        <img src={char5} style={{ width: '70%', marginBottom: '5%' }} />
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
`;

export default ZeroInfo;
