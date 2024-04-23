import styled from "styled-components";
import React from 'react';
import { Link } from "react-scroll";
import { AiOutlineMessage } from "react-icons/ai";
// import {mobile, tablet} from "../responsive";



const Wrapper = styled.div`
  height: 5rem;
  width: 100vw;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: #252323;
`;

const Button = styled.button`
  width: 10rem;
  height: 85%;
  border-radius: 2rem;
  background-color: white;
  border: none;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

const Item = styled.li`
  margin: 1rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: yellow;
    padding-bottom: 0.5rem;
    border-bottom: solid 3px yellow;
  }
`;

const Logo = styled.img`
  width: 4rem;
  object-fit: cover;
`;

function NavBar() {
  return (
    <Wrapper>
      <Logo src="https://i.ibb.co/dLDXf06/o.png" alt="logo"/>
      <Menu>
        <Item>
          <Link to="home" smooth duration={500} >Home</Link>
        </Item>
        <Item>
          <Link to="about" smooth duration={500} >About</Link>
        </Item>
        <Item>
          <Link to="portfolio" smooth duration={500} >Portfolio</Link>
        </Item>
        <Item>
          <Link to="clients" smooth duration={500} >Client</Link>
        </Item>
      </Menu>
      <Button>
       <AiOutlineMessage />
        Contact me
      </Button>
    </Wrapper>
  )
}

export default NavBar;