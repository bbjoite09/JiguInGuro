import React, { useState } from 'react';
import ham from '../static/images/top_ham.png';
import styled from 'styled-components';
import Typography from './Typography';
import { Link } from 'react-router-dom';

const Topbar = () => {
  const [isSelect, setSelect] = useState(false);

  return (
    <Container>
      <RowContainer>
        <Typography margin="4% 10%" size="1.8rem" zIndex="100">
          제로인구로
        </Typography>
        <Button
          onClick={() => setSelect(!isSelect)}
          style={{ marginRight: '10%', zIndex: '100' }}>
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
              }}>
              <Typography
                type="AppleSDGothicNeoB00"
                textAlign="right"
                margin="5% 10%"
                size="2rem"
                fontWeight="10">
                바로가기
              </Typography>
            </li>
            <Li>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography
                  type="AppleSDGothicNeoB00"
                  textAlign="right"
                  margin="5% 10%"
                  size="1.5rem">
                  메인
                </Typography>
              </Link>
            </Li>
            <Li>
              <A
                href="#proInfo"
                onClick={() => {
                  setSelect(false);
                }}>
                <Typography
                  type="AppleSDGothicNeoB00"
                  textAlign="right"
                  margin="5% 10%"
                  size="1.5rem">
                  프로젝트 소개
                </Typography>
              </A>
            </Li>
            <Li>
              <Link to="/diary" style={{ textDecoration: 'none' }}>
                <Typography
                  type="AppleSDGothicNeoB00"
                  textAlign="right"
                  margin="5% 10%"
                  size="1.5rem">
                  다이어리 양식 다운로드
                </Typography>
              </Link>
            </Li>
            <Li>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography
                  type="AppleSDGothicNeoB00"
                  textAlign="right"
                  margin="5% 10%"
                  size="1.5rem">
                  스티커팩 다운로드
                </Typography>
              </Link>
            </Li>
            <Li>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography
                  type="AppleSDGothicNeoB00"
                  textAlign="right"
                  margin="5% 10%"
                  size="1.5rem">
                  이벤트 안내
                </Typography>
              </Link>
            </Li>
            <Li>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography
                  type="AppleSDGothicNeoB00"
                  textAlign="right"
                  margin="5% 10%"
                  size="1.5rem">
                  제로인 등록증
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
  height: 100%;
  top: 0;
`;
const RowContainer = styled.div`
  width: 100%;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
  width: 25em;
  right: 0;
  border: 1.5px solid #078d68;
  margin: 10% 0 0 0%;
  background-color: white;
  z-index: 3;
`;

const Ul = styled.ul`
  margin-block-start: 0px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
`;

const Li = styled.li`
  width: 100%;
  list-style: none;
  border-bottom: 1px solid #078d68;
`;

const A = styled.a`
  text-decoration: none;
`;

export default Topbar;
