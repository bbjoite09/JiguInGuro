import React from 'react';
import styled from 'styled-components';
import Typography from '../../elements/Typography';
import tag1 from '../../static/images/event/tag_1.png';
import tag2 from '../../static/images/event/tag_2.png';
import tag3 from '../../static/images/event/tag_3.png';
import item from '../../static/images/event/event_item.png';

const Event = () => {
  return (
    <Container>
      <div
        style={{
          width: '5.3em',
          height: '2.1em',
          margin: '0 auto',
          borderRadius: '50px',
          backgroundColor: '#078D68',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <Typography
          color="white"
          size="1.2rem"
          lineHeight="1.5rem"
          type="GothicH">
          EVENT
        </Typography>
      </div>
      <Typography myType="title" margin="5% 0">
        함께해요
        <br />
        #제로인구로
      </Typography>
      <Typography myType="content" type="GothicM">
        2022.04.22 ~ 2022.05.05
      </Typography>
      <img src={tag1} style={{ width: '45%', margin: '5% 0 0 -35%' }} />
      <br />
      <img src={tag2} style={{ width: '50%', margin: '1% 0 0 30%' }} />
      <img src={tag3} style={{ width: '70%', margin: '1% 0 8% -10%' }} />
      <Typography myType="content" type="GothicM">
        제로인 여러분의 제로웨이스트 흔적이 담긴
        <br />
        <span style={{ fontFamily: 'GothicB' }}>{'<매일제로>'}를 개인 sns</span>
        (인스타그램, 블로그)에
        <br />
        <span style={{ fontFamily: 'GothicB' }}>#해시태그</span>와 함께 자랑해
        주세요!
      </Typography>
      <Typography myType="content" type="GothicM">
        추첨을 통해 제로인구의
        <br />
        제로라이프를 응원하는 상품을 보내드립니다!
      </Typography>
      <img
        src={item}
        style={{ width: '80%', marginTop: '13%', marginBottom: '20%' }}
      />
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  padding-top: 7em;
`;
export default Event;
