import React from 'react';
import styled from 'styled-components';
import DiaryInfo from '../components/diary/DiaryInfo';
import DiarySummary from '../components/diary/DiarySummary';
import Topbar from '../elements/Topbar';

const Diary = () => {
  return (
    <Container>
      <Topbar />
      <DiarySummary />
      <DiaryInfo />
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
