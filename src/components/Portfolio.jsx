import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 85vw;
  margin: 0 auto;
  z-index: 2;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Header =styled.h1`
  font-size: 3rem;
  font-weight: 600;
`;

const Desc = styled.p`
  margin: 2rem;
  text-align: center;
  margin: 1rem 0;
  padding: 0.5rem 1rem;
`;

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  margin: 1rem;
  min-height: 250px;
  width: 150px;
  border-radius: 1rem;
  background-color: azure;
`;


function Portfolio() {
  return (
    <Wrapper id='portfolio'>
      <Header>My Portfolio</Header>
      <Desc>
        I take pride in paying attention to the smallest details and making sure that my work
        is pixel perfect. I am excited to bring my skills and experience to help businesses
        achieve their goals and create a strong online presence.
      </Desc>
      <Section>
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
      </Section>
    </Wrapper>
  )
}

export default Portfolio