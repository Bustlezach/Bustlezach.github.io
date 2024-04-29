import React from 'react';
import styled from 'styled-components';
import { mobile, tablet } from "../responsive";
import { SiAntdesign } from "react-icons/si";
import { MdAppRegistration } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";



function About() {
  return (
    <Wrapper id='about'>
      <Heading>What i do</Heading>
      <History>
        {/* I am a skilled and passionate web designer with experience in creating 
        vitually appealing and user-friendly websites. I have a strong understanding of
        design and a keen eye for details. I am proficient in HTML, CSS, JsvaScript and React Js,
        as well as design software such as Abode Photoshop. */}
        I'm a software engineer specializing in front-end development. My passion lies in creating unforgettable user experiences that resonate on a deeper level. I'm all about blending functionality with flair, crafting apps that are both fashionable and timeless. <br /><br />
With a keen eye for design and a love for pushing the boundaries of what's possible, I bring a unique perspective to every project. From sleek interfaces to seamless interactions, I strive to create experiences that not only meet user needs but also leave a lasting impression. Let's collaborate and turn your ideas into something truly remarkable.

      </History>
      <Section>
        <Tile>
          <Icon>
            <SiAntdesign />
          </Icon>
          <InnerWrapper>
            <AppTitle>UI/UX design</AppTitle>
            <AppDesc>I leverage the power of design thinking to craft user interfaces (UI) that are intuitive and user experiences (UX) that are delightful. I ensure a smooth flow throughout the user journey, making interactions effortless and enjoyable.</AppDesc>
          </InnerWrapper>
        </Tile>
        <Tile>
          <Icon>
            <CgWebsite />
          </Icon>
          <InnerWrapper>
            <AppTitle>Website design</AppTitle>
            <AppDesc>I transform ideas into visually stunning and functionally sound websites. I prioritize user experience (UX) and search engine optimization (SEO) to create websites that not only look great but also drive results.</AppDesc>
          </InnerWrapper>
        </Tile>
        <Tile>
          <Icon>
            <MdAppRegistration />
          </Icon>
          <InnerWrapper>
            <AppTitle>App design</AppTitle>
            <AppDesc>I translate complex functionalities into beautifully designed and intuitive mobile applications. I prioritize user experience (UX) to ensure a seamless and enjoyable interaction for your users.</AppDesc>
          </InnerWrapper>
        </Tile>
      </Section>
    </Wrapper>
  )
}

export default About;



const Wrapper = styled.div`
  min-height: calc(100vh - 10rem);
  width: 85vw;
  padding-top: 5rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  

  ${mobile({
    alignItems: 'center',
  })}
  
  ${tablet({
    alignItems: 'center',
  })}

`;

const Heading = styled.h1`
  font-weight: 500;
`;

const History = styled.p`
  margin: 1.5rem 0;
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem 1rem;
`;

const Tile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #2e2d2b;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 0.5rem;
  width: 75vw;
`;
const Icon = styled.div`
  font-size: 2rem;
  padding: 0 1rem 0 0;
  color: yellow;
`;

const InnerWrapper = styled.div``;

const Section = styled.section``;

const AppTitle = styled.h3`
  font-weight: 500;
`;

const AppDesc = styled.div`
  overflow: hidden;
  padding-top: 0.5rem;
  font-size: 0.8rem;
`;
