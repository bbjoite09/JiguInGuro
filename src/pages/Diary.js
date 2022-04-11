import React from 'react';
import styled from 'styled-components';
import RoundButton from '../elements/RoundButton';
import Topbar from '../elements/Topbar';
import Typography from '../elements/Typography';
import picture from '../static/images/diary/pic.png';

const diaryDetail = (discription1, discription2) => {
  return (
    <>
      <Typography size="2.4rem" margin="2em 0 0 0">
        {discription1}
      </Typography>
      <Typography type="AppleSDGothicNeoB00">{discription2}</Typography>{' '}
      <img src={picture} style={{ width: '80%' }} />
    </>
  );
};

const Diary = () => {
  return (
    <Container>
      <Topbar />
      <Typography size="3.3rem" margin="2em 0 1em 0">
        걱정마세요
        <br />
        제로일기가 있으니까요!
      </Typography>
      <img src={picture} style={{ width: '80%' }} />
      <Typography type="AppleSDGothicNeoB00" margin="2em 0 0 0">
        지구인들 대규모 {"'"}제로인구{"'"} 이주 프로젝트
        <br />: 제로웨이스트 다이어리 set
      </Typography>
      <RoundButton>다이어리 다운로드</RoundButton>
      {diaryDetail(
        '먼슬리',
        '초보 제로웨이스터들을 위한 제로웨이스트 길잡이 다이어리',
      )}
      {diaryDetail(
        '데일리',
        '초보 제로웨이스터들을 위한 제로웨이스트 길잡이 다이어리',
      )}
      {diaryDetail(
        '제로웨이스트 체크리스트',
        '초보 제로웨이스터들을 위한 제로웨이스트 길잡이 다이어리',
      )}
      {diaryDetail(
        '오늘의 제로지수 트래커',
        '초보 제로웨이스터들을 위한 제로웨이스트 길잡이 다이어리',
      )}
      {diaryDetail(
        '제로 습관 트래커',
        '초보 제로웨이스터들을 위한 제로웨이스트 길잡이 다이어리',
      )}
    </Container>
  );
};
const Container = styled.div`
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  overflow: hidden;
  padding: 2em 0;
`;

export default Diary;
