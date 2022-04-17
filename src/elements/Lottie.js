import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import lottie from 'lottie-web';
import party from '../static/images/home/party.json';

const GetLottie = () => {
  //lottie
  const likecontainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: likecontainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: party,
    });
  }, []);
  return (
    <>
      <NoMore ref={likecontainer}></NoMore>
    </>
  );
};

const NoMore = styled.div`
  width: 130%;
  height: 130%;
  margin: 0 auto;
  position: absolute;
  top: -35%;
  z-index: 0;
`;

export default GetLottie;
