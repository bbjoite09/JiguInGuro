import React, { useState } from 'react';
import ham from '../static/images/top_ham.png';
import exit from '../static/images/exit.svg';
import styled, { keyframes } from 'styled-components';
import Typography from './Typography';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const [isSelect, setSelect] = useState(false);
  const [isShow, setShow] = useState(false);

  const link = document.location.href;
  const location = link.split('/').pop();

  const handleMenuClick = () => {
    if (location === 'diary') {
      return 1;
    } else if (location === 'guro') {
      return 2;
    } else {
      return 0;
    }
  };

  const handleShow = () => {
    setShow(!isShow);
    if (isShow) {
      setTimeout(() => {
        setSelect(!isSelect);
      }, 300);
    } else {
      setSelect(!isSelect);
    }
    handleMenuClick();
  };

  return (
    <Container style={{ height: isSelect ? '100%' : 'auto' }}>
      {isSelect ? (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0, 0.5)',
            position: 'absolute',
            zIndex: 10,
          }}
          onClick={() => handleShow()}
        />
      ) : null}
      <RowContainer
        style={{
          overflow: 'hidden',
          padding: '3% 10%',
          width: '80%',
          justifyContent: 'space-between',
        }}>
        <Link
          to="/"
          style={{ textDecoration: 'none' }}
          onClick={() => handleShow(0)}>
          <text
            style={{
              fontSize: '1.8rem',
              fontFamily: 'Cafe24Ssurround',
              color: '#078D68',
              latterSpacing: '-1.6rem',
            }}>
            제로인구로
          </text>
        </Link>
        <Button
          onClick={() => {
            handleShow();
          }}
          style={{ width: '2.5rem', height: '2.5rem' }}>
          <img src={ham} style={{ width: '100%' }} />
        </Button>
      </RowContainer>

      {!isSelect ? null : (
        <Menu isSelect={isShow}>
          <Ul>
            <li
              style={{
                listStyle: 'none',
                borderBottom: '1.5px solid #078d68',
                backgroundColor: 'white',
              }}>
              <RowContainer
                style={{
                  backgroundColor: 'white',
                  backdropFilter: 'blur(0px)',
                }}>
                <Button
                  onClick={() => handleShow()}
                  style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    paddingRight: '10%',
                    marginLeft: '5%',
                    zIndex: 10,
                  }}>
                  <img
                    src={exit}
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      marginLeft: '100%',
                    }}
                  />
                </Button>
                <Link
                  to="/"
                  style={{ textDecoration: 'none', width: '80%' }}
                  onClick={() => handleShow()}>
                  <Typography
                    type="GothicH"
                    textAlign="right"
                    margin="4% 10%"
                    size="2rem"
                    letterSpacing="-0.05rem">
                    바로가기
                  </Typography>
                </Link>
              </RowContainer>
            </li>
            <Li
              style={{
                backgroundColor: handleMenuClick() == 0 ? '#52b185' : 'white',
              }}>
              <Link
                to="/"
                style={{ textDecoration: 'none' }}
                onClick={() => handleShow()}>
                <Typography
                  type="GothicB"
                  textAlign="right"
                  margin="0 10%"
                  size="2rem"
                  color={handleMenuClick() == 0 ? 'white' : '#078D68'}
                  letterSpacing="-0.05rem">
                  제로인구로 소개
                </Typography>
              </Link>
            </Li>
            <Li
              style={{
                backgroundColor: handleMenuClick() == 1 ? '#52b185' : 'white',
              }}>
              <Link
                to="/diary"
                style={{ textDecoration: 'none' }}
                onClick={() => handleShow()}>
                <Typography
                  type="GothicB"
                  textAlign="right"
                  margin="0 10%"
                  size="2rem"
                  color={handleMenuClick() == 1 ? 'white' : '#078D68'}
                  letterSpacing="-0.05rem">
                  제로일기 다운로드
                </Typography>
              </Link>
            </Li>
            <Li
              style={{
                backgroundColor: handleMenuClick() == 2 ? '#52b185' : 'white',
              }}>
              <Link
                to="/guro"
                style={{ textDecoration: 'none' }}
                onClick={() => handleShow()}>
                <Typography
                  type="GothicB"
                  textAlign="right"
                  margin="0 10%"
                  size="2rem"
                  color={handleMenuClick() == 2 ? 'white' : '#078D68'}
                  letterSpacing="-0.05rem">
                  구로인 환경 정보통
                </Typography>
              </Link>
            </Li>
          </Ul>
        </Menu>
      )}
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 4;
`;
const RowContainer = styled.nav`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: inherit;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  z-index: 4;
`;
const Button = styled.button`
  background-color: #00ff0000;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  vertical-align: middle;
  padding-right: 0;
`;

const moveOpen = keyframes`{
  to {
    left: 30%;
    zIndex: 5
  }
  from {
      left:100%;
    }
}`;
const moveClose = keyframes`{
  to {
    left: 100%;
  }
  from {
    left: 30%;
  }
}`;

const Menu = styled.aside`
  position: absolute;
  height: 100vh;
  width: 70%;
  right: 0;
  top: 0;
  border: 3px solid #078d68;
  background-color: white;
  z-index: 100;
  animation: ${props => (props.isSelect ? moveOpen : moveClose)};
  animation-duration: 0.5s;
  timing-function: ${props => (props.isSelect ? 'linear' : 'linear')};
  animation-fill-mode: ${props => (props.isSelect ? '' : 'forwards')};
`;
const Ul = styled.ul`
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  background-color: white;
`;

const Li = styled.li`
  width: 100%;
  list-style: none;
  border-bottom: 1px solid #078d68;
  padding-top: 4%;
  padding-bottom: 4%;
`;

export default Topbar;
