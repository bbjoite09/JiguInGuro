import React from 'react';
import styled from 'styled-components';

import Home from './Home';
import ProblemInfo from './ProblemInfo';
import ZeroInfo from './ZeroInfo';
import ZeroWasteInfo from './ZeroWasteInfo';

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
