import React from 'react';
import styled from 'styled-components';
import {mobile, tablet} from '../responsive';
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";




const Wrapper = styled.div`
  min-height: calc(100vh - 5rem);
  width: 85vw;
  margin: 0 auto;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  

`;

const Header = styled.h1`
  ${mobile({
    fontWeight: "500",
    fontSize: "26px"
  })}
`;

const Desc = styled.p`
  margin: 2rem 0;
  width: 100%;
  text-align: center;

  ${tablet({
    minHeight: "3rem",
  })}
`;

const Form = styled.form`
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Input = styled.input`
  color: white;
  width: 65vw;
  height: 2rem;
  padding: 0 0.5rem;
  background-color: #2e2d2b;
  border: none;
`;

const Textarea = styled.textarea`
  width: 65vw;
  padding: 0.5rem;
  background-color: #2e2d2b;
  border: none;
  color: white;
`;

const Button = styled.button`
  margin: 2rem;
  padding: 0.5rem 2.5rem;
  color: black;
  background-color: white;
  text-align: center;
  font-size: 1rem;
  border: solid 1px white;
  border-radius: 10px;

  ${tablet({
    margin: "0.5rem",
    padding: "0.3rem 1.5rem",
  })}

`;

const SocialMediaDiv = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  min-width: 20vw;
  display: flex;
  align-items: center;
  justify-content: space-around;

`;

const SocialMedia = styled.a`
  font-size: 2rem;
  margin: 0.5rem;

  ${tablet({
    fontSize: "1.5rem",
  })}
`;




function Contactme() {
  return (
    <Wrapper id='contactme'>
      <Header>Contact Me</Header>
      <Desc>
        Please fill out the form below to discuss any work opportunities.
      </Desc>
      <Form method='get' action='mailto:bustlezach01@gmail.com' encType='text/plain'>
        <Input placeholder='Your name' name='name'/>
        <Input placeholder='Your Email' name='email' />
        <Textarea placeholder='Your Message' rows={10}/>
        <Button type='submit'>Submit</Button>
      </Form>
      <SocialMediaDiv>
        <SocialMedia href='https://www.linkedin.com/in/oluwaseunolorunshola/' target='_blank' >
          <FaLinkedin color='white'/>
        </SocialMedia>
        <SocialMedia href='https://youtube.com/@oluwaseunolorunshola3978?si=ZAm06Eh_IV8sqeX4' target='_blank' >
        <CiYoutube color='red'/>
        </SocialMedia>
        <SocialMedia href='https://x.com/bustlezach?t=NlryY1jpv47lR5bfFNFwBg&s=08' target='_blank' >
          <FaXTwitter color='white'/>
        </SocialMedia >
      </SocialMediaDiv>
    </Wrapper>
  )
}

export default Contactme