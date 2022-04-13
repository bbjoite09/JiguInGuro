import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Typography from '../elements/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import divider1 from '../static/images/problemInfo/yellow_divider.svg';
import divider2 from '../static/images/problemInfo/white_divider.svg';
import one from '../static/images/problemInfo/one.svg';
import two from '../static/images/problemInfo/two.svg';
import three from '../static/images/problemInfo/three.svg';
import { service } from '../services';
import trash1 from '../static/images/problemInfo/trash_1.png';
import trash2 from '../static/images/problemInfo/trash_2.png';
import trash3 from '../static/images/problemInfo/trash_3.png';

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
  const [data, setData] = useState();
  useEffect(() => {
    service.comment.getComment().then(res => setData(res));
  }, []);
  console.log(data);

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
          size={'3.1rem'}
          margin={'2em 0 0 10%'}>
          지금 지구에는
          <br />
          <span style={{ color: '#EADB50' }}>쓰레기 대란</span>이
          <br />
          시작되고 있어요
        </Typography>
        <img src={divider1} style={{ width: '55%', margin: ' 5% 0 15% 10%' }} />
      </div>

      <MySlider {...settings} style={{ zIndex: '0' }}>
        <>
          <div style={{ padding: '0 3.5em 0 1em' }}>
            <Card>
              <img src={one} style={{ width: '10%', marginTop: '9%' }} />
              <Typography color="#4D99CB" size="2.5rem" zIndex="3">
                2025년 <span style={{ color: '#EADB50' }}>수도권</span>
                <br />
                쓰레기 매립지 폐쇄{' '}
                <span style={{ color: '#EADB50' }}>예정</span>
              </Typography>
              <img
                src={trash1}
                style={{
                  width: '100%',
                  zIndex: 2,
                  borderRadius: '20px',
                  position: 'absolute',
                  bottom: 0,
                }}
              />
              <Typography
                type="AppleSDGothicNeoB00"
                color="white"
                size="1.7rem"
                margin="12em 0 0 0"
                zIndex="3">
                앞으로 3년 후
              </Typography>
            </Card>
          </div>
        </>
        <>
          <div style={{ padding: '0 3.5em 0 1em' }}>
            <Card>
              <img src={two} style={{ width: '10%', marginTop: '9%' }} />
              <Typography color="#4D99CB" size="2.5rem" zIndex="3">
                구로구 쓰레기 배출량<span style={{ color: '#EADB50' }}>은</span>
                <br />
                서울<span style={{ color: '#EADB50' }}>에서도</span> Top 5
              </Typography>
              <Typography
                type="AppleSDGothicNeoB00"
                color="#4D99CB"
                size="1rem"
                margin="-1.8rem"
                zIndex="3">
                출처: 수도권매립지관리공사 홈페이지, 2021 기준
              </Typography>
              <img
                src={trash2}
                style={{
                  width: '70%',
                  zIndex: 2,
                  position: 'absolute',
                  bottom: 10,
                }}
              />
              <Typography
                type="AppleSDGothicNeoB00"
                color="white"
                size="1.7rem"
                margin="13em 0 0 0"
                zIndex="3">
                서울시 25개 자치구 중 5위
              </Typography>
            </Card>
          </div>
        </>
        <>
          <div style={{ padding: '0 3.5em 0 1em' }}>
            <Card>
              <img src={three} style={{ width: '10%', marginTop: '9%' }} />
              <Typography color="#4D99CB" size="2.5rem" zIndex="3">
                <span style={{ color: '#EADB50' }}>나혼자 산다?</span>
                <br />
                쓰레기와 함께 산다!
              </Typography>
              <Typography
                type="AppleSDGothicNeoB00"
                color="#4D99CB"
                size="1rem"
                margin="-1.8rem"
                zIndex="3">
                출처: 서울디지털재단 발행 보고서, 2020 발행
              </Typography>
              <img
                src={trash3}
                style={{
                  width: '50%',
                  zIndex: 2,
                  position: 'absolute',
                  top: '40%',
                }}
              />
              <Typography
                type="AppleSDGothicNeoB00"
                color="#4D99CB"
                size="1.7rem"
                margin="12em 0 0 0"
                zIndex="3">
                1인가구 일회용 쓰레기 배출량
                <br />
                다인가구의 2.3배
              </Typography>
            </Card>
          </div>
        </>
      </MySlider>
      <div
        style={{
          width: '130%',
          height: '70vh',
          margin: '20% 0 0 -15%',
          borderRadius: '50%',
          background: 'linear-gradient( to bottom, white, #EADB50 55%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: -1,
          clip: 'rect(0, 100%, 90%, 100%)',
        }}>
        <Typography color="#4D99CB" size="4.5rem" margin="-5% 0 5% 0 ">
          더 이상
          <br />
          시간이 없어요!
        </Typography>
        <img src={divider2} style={{ width: '50%', margin: '0 auto' }} />
        <Typography
          type="AppleSDGothicNeoB00"
          color="#4D99CB"
          size="1.8rem"
          margin="5% 0 9.5% 0">
          바로 지금, {"'"}제로인구{"'"} 로<br />
          다시 태어나야 할 시간
        </Typography>
      </div>
      <div
        style={{
          backgroundColor: ' #078d68',
          width: '100%',
          height: '2.5em',
          lineHeight: '2.5em',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          zIndex: 3,
          marginTop: '-14.3em',
        }}>
        <AnimationText>
          #제로인구로 #제로in구로 #제로인구로 #제로in구로 #제로인구로
        </AnimationText>
      </div>
      <div
        style={{
          width: '100%',
          height: '15%',
          backgroundColor: 'white',
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  height: ${document.documentElement.clientWidth < 400 ? 170 : 178}vh;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #4d99cb;
  overflow: hidden;
`;

const MySlider = styled(Slider)`
  .slick-dots li button:before {
    line-height: 50px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    color: white;
  }
  .slick-dots li.slick-active button:before {
    color: #eadb50;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 110%;
  height: 55vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;
`;

const move = keyframes`{
  from {
    margin-left: 100%;
  }
  to {
    margin-left: -150%;
  }
}`;

const AnimationText = styled.p`
  margin: 0;
  font-family: Cafe24Ssurround;
  color: white;
  font-size: 1.4rem;
  animation: ${move} 5s linear infinite;
`;

export default ProblemInfo;
