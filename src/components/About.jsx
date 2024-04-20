import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 85vw;
  margin: 0 auto;
  z-index: 2;
  background-color: beige;
  height: 900px;
`;

function About() {
  return (
    <Wrapper id='about'>About</Wrapper>
  )
}

export default About