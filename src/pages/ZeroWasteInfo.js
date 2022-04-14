import React from 'react';
import styled from 'styled-components';
import Typography from '../elements/Typography';
import divider1 from '../static/images/zeroWasteInfo/pink_divider.svg';
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
        <img src={divider1} style={{ width: '60%' }} />
        <img src={char3} style={{ width: '90%', marginTop: '15%' }} />
        <img src={char4} style={{ width: '90%', margin: '1% 0 3% 3%' }} />
        <img src={char5} style={{ width: '85%', marginBottom: '20%' }} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #078d68;
  overflow: hidden;
  padding-top: 5em;
`;

export default ZeroInfo;
