import GuroTip from '../components/guro/GuroTip';
import React from 'react';
import styled from 'styled-components';
import Topbar from '../elements/Topbar';
import GuroLogo from '../components/guro/GuroLogo';

const Guro = () => {
  return (
    <Container>
      <Topbar />
      <GuroLogo />
      <GuroTip />
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-color: white;
  overflow: hidden;
`;

export default Guro;
