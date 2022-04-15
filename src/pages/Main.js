import React from 'react';
import styled from 'styled-components';

import Home from '../components/Home';
import ProblemInfo from '../components/ProblemInfo';
import ZeroInfo from '../components/ZeroInfo';
import ZeroWasteInfo from '../components/ZeroWasteInfo';

const Main = () => {
  return (
    <div
      className="App"
      style={{
        '-webkit-bleedingedgethingy': 1,
        bleedingedgethingy: 1,
        backgroundColor: 'gray',
      }}>
      <Container>
        <Home />
        <ProblemInfo />
        <ZeroWasteInfo />
        <ZeroInfo />
      </Container>
    </div>
  );
};
const Container = styled.div`
  max-width: 500px;
  height: 100%;
  margin: 0 auto;
  overflow-y: auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: white;
`;
export default Main;
