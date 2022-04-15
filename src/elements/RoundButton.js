import React from 'react';
import Typography from './Typography';

const RoundButton = props => {
  // eslint-disable-next-line react/prop-types
  const { children, backgroundColor, textColor } = props;
  return (
    <button
      style={{
        backgroundColor,
        width: '40%',
        height: '4.8rem',
        borderRadius: '10px',
        border: 'none',
        cursor: 'pointer',
        verticalAlign: 'middle',
        margin: '3em 0 1em 0',
        boxShadow: '0 3px 3px #707070',
      }}>
      <Typography
        color={textColor}
        margin="0"
        type="GothicEB"
        size="1.6rem"
        letterSpacing="-0.05rem">
        {children}
      </Typography>
    </button>
  );
};

RoundButton.defaultProps = {
  children: null,
  backgroundColor: '#078D68',
  textColor: 'white',
};

export default RoundButton;
