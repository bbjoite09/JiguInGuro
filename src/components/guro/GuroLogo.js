import React from 'react';
import MoveText from '../../elements/MoveText';
import logo from '../../static/images/guro/guro_logo.webp';

const GuroLogo = () => {
  return (
    <>
      <img
        src={logo}
        style={{ width: '110%', margin: '15% 0 -0.6% -6%' }}
        loading="lazy"
      />
      <MoveText backgroundColor="#0B8765" color="white" />
    </>
  );
};

export default GuroLogo;
