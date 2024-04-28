import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import {mobile, tablet} from '../responsive';
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";




function Contactme() {

  const [ user_name, setUserName ] = useState('');
  const [ user_email, setUserEmail ] = useState('');
  const [ message, setMessage ] = useState('');

  const nameHandleChange = (event) => {
    const {value} = event.target;
    setUserName((prev) => value);
  };
  const emailHandleChange = (event) => {
    const {value} = event.target;
    setUserEmail((prev) => value);
  };
  const messageHandleChange = (event) => {
    const {value} = event.target;
    setMessage((prev) => value);
  };

  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID, 
        process.env.REACT_APP_YOUR_TEMPLATE_ID, 
        form.current, 
        {
          publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("Message has been sent!");
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      setUserName('');
      setUserEmail('');
      setMessage('');
  };


  return (
    <Wrapper id='contactme'>
      <Header>Contact Me</Header>
      <Desc>
        Please fill out the form below to discuss any work opportunities.
      </Desc>
      <Form ref={form} onSubmit={sendEmail} >
        <Input
         placeholder='Your name'
         type='text' 
         name='user_name' 
         onChange={nameHandleChange} 
         value={user_name}
         required
        />
        <Input
         placeholder='Your Email'
         type='email'
         name='user_email' 
         onChange={emailHandleChange} 
         value={user_email}
         required
        />
        <Textarea
         placeholder='Your Message' 
         type='text'
         rows={10} name='message' 
         onChange={messageHandleChange} 
         value={message}
         required
        />
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
  min-height: 70vh;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Input = styled.input`
  color: white;
  width: 35vw;
  height: 2rem;
  padding: 0 0.5rem;
  background-color: #2e2d2b;
  border: none;

  ${mobile({
    width: "60vw"
  })}
  ${tablet({
    width: "60vw"
  })}
`;

const Textarea = styled.textarea`
  width: 35vw;
  padding: 0.5rem;
  background-color: #2e2d2b;
  border: none;
  color: white;

  ${mobile({
    width: "60vw"
  })}
  ${tablet({
    width: "60vw"
  })}
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
  min-height: 10vh;
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

