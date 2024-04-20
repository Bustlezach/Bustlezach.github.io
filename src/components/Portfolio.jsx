import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 85vw;
  margin: 0 auto;
  z-index: 2;
  height: 800px;
  background-color: brown;
`;

function Portfolio() {
  return (
    <Wrapper id='portfolio'>Portfolio</Wrapper>
  )
}

export default Portfolio