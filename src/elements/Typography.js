import React from 'react';

const Typography = props => {
  // eslint-disable-next-line react/prop-types
  const { type, size, children, color, margin, textAlign } = props;
  return (
    <p
      style={{
        textAlign,
        fontFamily: type,
        fontSize: size,
        color: color,
        margin,
      }}>
      {children}
    </p>
  );
};

Typography.defaultProps = {
  children: null,
  size: '1.5rem',
  type: 'Cafe24Ssurround',
  color: '#078D68',
  margin: false,
};

export default Typography;
