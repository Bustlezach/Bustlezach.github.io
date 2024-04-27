import React from 'react';
import styled from 'styled-components';
import { FaSuitcase } from "react-icons/fa6";
import { Link } from "react-scroll";
import { mobile, tablet } from "../responsive";



const Wrapper = styled.div`
  width: 85vw;
  margin: 0 auto;
  min-height: calc(100vh - 5rem);;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    position: 'relative',
    alignItems: 'center',
  })}
  
  ${tablet({
    position: 'relative',
    alignItems: 'center',
  })}
`;

const IntroContent = styled.div`
  z-index: 2;
  
  ${mobile({
    padding: '0 1rem',
    justifyContent: 'center'
  })}

${tablet({
    padding: '0 1rem',
    justifyContent: 'center'
  })}
`;

const Greetings = styled.p``;

const Title = styled.h1``;

const Name = styled.span`
  color: yellow;
`

const Introduction = styled.p`
  font-size: 0.8rem;
  letter-spacing: 0.08rem;
`

const Button = styled.button`
  background-color: white;
  padding: 0.6rem 0.8rem;
  margin: 0.5rem 0;
  width: 7rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
`;

const Buttonspan = styled.span`
  font-size: 0.8rem;
`;

const IntroImg = styled.img`
  /* width: 30vw; */
  height: calc(95vh - 5rem);
  width: 45vw;
  object-fit: cover;
  z-index: -1;
  
  ${mobile({
    width: '100%',
    position: 'absolute',
    top: '0',
    right: '0',
    opacity: '0.5'
  })}

${tablet({
    width: '100%',
    position: 'absolute',
    top: '0',
    right: '0',
    opacity: '0.5'
  })}
`;


function Intro() {
  return (
    <Wrapper id='home'>
      <IntroContent>
        <Greetings>Hello,</Greetings>
        <Title>
          I'm <Name> Oluwaseun</Name> <br></br>
          Website Designer
        </Title>
        <Introduction>
          I am a skilled and passionate web designer with experience in
          creating visually appealing and user-friendly websites.
        </Introduction>
        <Button>
          <FaSuitcase />
          <Link to='about' smooth>
            <Buttonspan>Hire me</Buttonspan>
          </Link>
        </Button>
      </IntroContent>
     <IntroImg
      src='https://i.ibb.co/sjCMHW0/falling-rain.jpg' 
      alt='self_img'
    />
    </Wrapper>
  )
}

export default Intro