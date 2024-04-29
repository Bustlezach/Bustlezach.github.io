import React from 'react';
import styled from 'styled-components';
import {mobile, tablet } from "../responsive";



function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <Wrapper>
      Copyright &#169; {currentYear} Bustlezach. All right reserved.
    </Wrapper>
  )
}

export default Footer;

const Wrapper = styled.footer`
  background-color: #252323;
  color: white;
  height: 5vh;
  width: 100vw;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;


  ${mobile({
    fontSize: "0.6rem",
  })}

  ${tablet({
    fontSize: "0.8rem",
  })}
`;