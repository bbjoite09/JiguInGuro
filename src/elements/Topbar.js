import React, { useState } from 'react';
import ham from '../static/images/top_ham.png';
import exit from '../static/images/exit.svg';
import styled from 'styled-components';
import Typography from './Typography';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const [isSelect, setSelect] = useState(false);

  return (
    <Container style={{ height: isSelect ? '100%' : 'auto' }}>
      <RowContainer>
        <Typography margin="4% 0 4% 10%" size="1.8rem">
          제로인구로
        </Typography>
        <Button
          onClick={() => setSelect(!isSelect)}
          style={{ marginRight: '10%' }}>
          <img src={ham} style={{ width: '100%' }} />
        </Button>
      </RowContainer>
      {isSelect ? (
        <Menu>
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
                  onClick={() => setSelect(!isSelect)}
                  style={{ marginRight: '10%' }}>
                  <img
                    src={exit}
                    style={{ width: '200%', marginLeft: '100%' }}
                  />
                </Button>
                <Typography
                  type="GothicH"
                  textAlign="right"
                  margin="5% 10%"
                  size="2rem"
                  fontWeight="10"
                  letterSpacing="-0.05rem">
                  바로가기
                </Typography>
              </RowContainer>
            </li>
            <Li>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography
                  type="GothicB"
                  textAlign="right"
                  margin="5% 10%"
                  size="2rem"
                  letterSpacing="-0.05rem">
                  제로인구로
                </Typography>
              </Link>
            </Li>
            <Li>
              <Link to="/diary" style={{ textDecoration: 'none' }}>
                <Typography
                  type="GothicB"
                  textAlign="right"
                  margin="5% 10%"
                  size="2rem"
                  letterSpacing="-0.05rem">
                  제로일기 다이어리
                </Typography>
              </Link>
            </Li>
            <Li>
              <Link to="/guro" style={{ textDecoration: 'none' }}>
                <Typography
                  type="GothicB"
                  textAlign="right"
                  margin="5% 10%"
                  size="2rem"
                  letterSpacing="-0.05rem">
                  구로구 환경정보{' '}
                </Typography>
              </Link>
            </Li>
          </Ul>
        </Menu>
      ) : null}
    </Container>
  );
};
const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 4;
`;
const RowContainer = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: inherit;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
`;
const Button = styled.button`
  background-color: #00ff0000;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  vertical-align: middle;
  width: 25px;
  height: 25px;
`;
const Menu = styled.div`
  position: absolute;
  height: 100vh;
  width: 30em;
  right: 0;
  top: 0;
  border: 1.5px solid #078d68;
  background-color: white;
  z-index: 5;
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
  background-color: white;
`;

export default Topbar;
