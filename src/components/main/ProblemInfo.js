import React from 'react';
import styled from 'styled-components';
import Typography from '../../elements/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import divider1 from '../../static/images/problemInfo/yellow_divider.svg';
import divider2 from '../../static/images/problemInfo/white_divider.svg';
import card1 from '../../static/images/problemInfo/card_1.webp';
import card2 from '../../static/images/problemInfo/card_2.webp';
import card3 from '../../static/images/problemInfo/card_3.webp';
import note from '../../static/images/problemInfo/note.png';

const ProblemInfo = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    // autoplay: true,
    centerMode: true,
  };

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Typography
          color="white"
          textAlign={'left'}
          size={'3.4rem'}
          margin={'2.5em 0 0 10%'}
          lineHeight="48px">
          지금 지구에는
          <br />
          <span style={{ color: '#EADB50' }}>쓰레기 대란</span>이
          <br />
          시작되고 있어요
        </Typography>
        <img
          src={divider1}
          style={{ width: '58%', margin: ' 5% 0 15% 10%' }}
          loading="lazy"
        />
      </div>

      <MySlider {...settings} style={{ zIndex: '0', marginLeft: '-5%' }}>
        <>
          <div style={{ paddingLeft: '5%' }}>
            <img
              src={card1}
              style={{ width: '100%', height: '100%' }}
              loading="lazy"
            />
          </div>
        </>{' '}
        <>
          <div style={{ paddingLeft: '5%' }}>
            <img
              src={card2}
              style={{ width: '100%', height: '100%' }}
              loading="lazy"
            />
          </div>
        </>
        <>
          <div style={{ paddingLeft: '5%' }}>
            <img
              src={card3}
              style={{ width: '100%', height: '100%' }}
              loading="lazy"
            />
          </div>
        </>
      </MySlider>
      <div
        style={{
          width: '180%',
          height: '105%',
          margin: '20% 0 0 -40%',
          borderRadius: '50%',
          background: 'linear-gradient( to bottom, white, #EADB50 60%)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: -1,
          clip: 'rect(0, 100%, 90%, 100%)',
        }}>
        <div style={{ marginLeft: '5%', marginRight: '5%' }}>
          <Typography
            color="#4D99CB"
            size="3.8rem"
            margin="20% 0 5% 0"
            lineHeight="5rem">
            잘 버리는 것,
            <br />그 다음 단계로
          </Typography>
          <img src={divider2} style={{ width: '30%', margin: '0 auto' }} />
          <Typography
            myType="content"
            type="GothicM"
            color="#4D99CB"
            margin="5% 25% 0 25%">
            우리 삶이 발전한만큼 늘어난 쓰레기들...
            <br />
            이제 쓰레기를
            <span style={{ fontFamily: 'GothicEB' }}>‘잘 버리는 것’</span>에서
            나아가,
            <br />
            <span style={{ fontFamily: 'GothicEB' }}>‘만들지 않는 것’</span>을
            시도해 봐야 할 시간입니다.
          </Typography>
        </div>

        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#EADB50',
            marginTop: '5%',
            paddingBottom: '5em',
          }}>
          <img src={note} style={{ width: '48%' }} />
        </div>
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
  background-color: #4d99cb;
  overflow: hidden;
`;

const MySlider = styled(Slider)`
  .slick-dots li {
    margin: 0 auto;
    margin-right: 2px;
    margin-top: 10px;
  }

  .slick-dots li button:before {
    line-height: 60px;
    position: absolute;
    top: 0;
    left: 12.5px;
    color: white;
    content: '•';
    margin: 0 auto;
    font-size: 12px;
    opacity: 1;
    text-align: center;
  }
  .slick-dots li.slick-active button:before {
    color: #eadb50;
  }
`;

export default ProblemInfo;
