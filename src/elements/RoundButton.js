import React from 'react';
import Typography from './Typography';

const RoundButton = props => {
  // eslint-disable-next-line react/prop-types
  const { children, backgroundColor, textColor, id } = props;
  return (
    <div style={{ width: '100%' }}>
      <button
        id={id}
        style={{
          backgroundColor,
          width: '40%',
          height: '4.8rem',
          borderRadius: '10px',
          border: 'none',
          cursor: 'pointer',
          verticalAlign: 'middle',
          margin: '3em 0 1em 0',
          boxShadow: '0 3px 6px rgba(0,0,0, 0.16)',
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
    </div>
  );
};

RoundButton.defaultProps = {
  children: null,
  backgroundColor: '#078D68',
  textColor: 'white',
  id: null,
};

export default RoundButton;
