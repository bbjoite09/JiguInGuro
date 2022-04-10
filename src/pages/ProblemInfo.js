import React from 'react';
import styled from 'styled-components';
import Typography from '../elements/Typography';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProblemInfo = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerPadding: '0px',
  };
  return (
    <Container>
      <div
        style={{
          display: 'flex',
        }}>
        <Typography
          color="white"
          textAlign={'left'}
          size={'3.1rem'}
          margin={'2em 0 0 10%'}>
          지금 지구에는
          <br />
          <span style={{ color: 'yellow' }}>쓰레기 대란</span>이
          <br />
          시작되고 있어요
        </Typography>
      </div>
      <Slider {...settings}>
        <CardContainer>
          <Card />
        </CardContainer>
        <CardContainer>
          <Card />
        </CardContainer>
        <CardContainer>
          <Card />
        </CardContainer>
      </Slider>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  height: 100vh;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: #4d99cb;
`;

const CardContainer = styled.div`
  margin-top: 2em;
`;
const Card = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 80%;
  height: 55vh;
  margin: 0 auto;
`;
export default ProblemInfo;
