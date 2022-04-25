import React from 'react';
import MoveText from '../../elements/MoveText';
import logo from '../../static/images/guro/guro_logo.webp';

const GuroLogo = () => {
  return (
    <>
      <img
        src={logo}
        style={{
          width: '100%',
          marginTop: '11%',
          verticalAlign: 'middle',
          marginBottom: '-1px',
        }}
      />
      <MoveText backgroundColor="#0B8765" color="white" />
    </>
  );
};

export default GuroLogo;
