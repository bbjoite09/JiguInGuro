/* eslint-disable react/prop-types */
import React from 'react';

const Typography = props => {
  const {
    type,
    size,
    children,
    color,
    margin,
    textAlign,
    fontWeight,
    zIndex,
    lineHeight,
  } = props;
  return (
    <p
      style={{
        textAlign,
        fontFamily: type,
        fontSize: size,
        color: color,
        margin,
        fontWeight,
        zIndex,
        lineHeight,
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
