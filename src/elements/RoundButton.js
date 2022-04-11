import React from 'react';
import Typography from './Typography';

const RoundButton = props => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <button
      style={{
        backgroundColor: '#078D68',
        width: '40%',
        height: '40px',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        verticalAlign: 'middle',
        margin: '3em',
      }}>
      <Typography color="white" margin="0">
        {children}
      </Typography>
    </button>
  );
};

export default RoundButton;
