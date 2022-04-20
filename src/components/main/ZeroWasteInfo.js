import React from 'react';
import styled from 'styled-components';
import Typography from '../../elements/Typography';
import divider1 from '../../static/images/zeroWasteInfo/pink_divider.svg';
import bg from '../../static/images/zeroWasteInfo/zero_back.png';

const ZeroInfo = () => {
  return (
    <Container>
      <div
        style={{ display: 'flex', flexDirection: 'column', marginLeft: '10%' }}>
        <Typography
          myType="title"
          textAlign="left"
          margin="7% 0 5% 0"
          color="white">
          제로웨이스트,
          <br />
          <span style={{ color: '#D89EBE' }}>아직도</span> 멀게만
          <br />
          느껴지시나요?
        </Typography>
        <img src={divider1} style={{ width: '60%' }} loading="lazy" />
      </div>
      <img src={bg} style={{ width: '100%', marginBottom: '-1%' }} />
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
