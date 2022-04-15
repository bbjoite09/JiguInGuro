import React from 'react';
import styled, { keyframes } from 'styled-components';

const MoveText = props => {
  // eslint-disable-next-line react/prop-types
  const { backgroundColor, color } = props;
  return (
    <div
      style={{
        backgroundColor,
        width: '100%',
        height: '3em',
        lineHeight: '3em',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        zIndex: 2,
      }}>
      <AnimationText style={{ color }}>
        #제로인구로 #제로in구로 #제로인구로 #제로in구로 #제로인구로
      </AnimationText>
    </div>
  );
};

MoveText.defaultProps = {
  backgroundColor: 'white',
  color: '#078d68',
};

const move = keyframes`{
  from {
    margin-left: 100%;
  }
  to {
    margin-left: -150%;
  }
}`;

const AnimationText = styled.p`
  margin: 0;
  font-family: Cafe24Ssurround;
  font-size: 1.4rem;
  animation: ${move} 5s linear infinite;
`;

export default MoveText;
