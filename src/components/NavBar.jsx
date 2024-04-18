import styled from "styled-components";
import React from 'react';

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 5px 0;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 20px;
  background-color: white;
  border-color: white;
  font-size: 24px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Item = styled.li`
  width: 60px;
  text-align: center;
  cursor: pointer;
`;

const Logo = styled.img``;

function NavBar() {
  return (
    <Wrapper>
      <Logo src="" alt="Z" />
      <Menu>
        <Item>item 1</Item>
        <Item>item 1</Item>
        <Item>item 1</Item>
        <Item>item 1</Item>
        <Item>item 1</Item>
      </Menu>
      <Button>button</Button>
    </Wrapper>
  )
}

export default NavBar;