import React from 'react';
import MoveText from '../../elements/MoveText';
import logo from '../../static/images/guro/guro_logo.png';

const GuroLogo = () => {
  return (
    <>
      <img src={logo} style={{ width: '80%', margin: '15% 0 13% 0' }} />
      <MoveText backgroundColor="#0B8765" color="white" />
    </>
  );
};

export default GuroLogo;
