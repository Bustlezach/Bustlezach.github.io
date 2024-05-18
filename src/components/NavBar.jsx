import styled, { StyleSheetManager } from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMessage } from "react-icons/ai";
import "./active.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import { mobile, tablet } from "../responsive";
import { MyContext } from "../context/MyContext";

function NavBar() {
  const { mode } = useContext(MyContext);
  const [showHamburger, setShowHamburger] = useState(false);
  const [showmenu, setShowmenu] = useState(false);

  const handleClick = () => {
    setShowHamburger((prev) => !prev);
    setShowmenu((prev) => !prev);
  };

  const icon = showHamburger ? <IoCloseOutline /> : <RxHamburgerMenu />;

  useEffect(() => {
    const handleClick = () => {
      if (showmenu) {
        setShowHamburger((prev) => !prev);
        setShowmenu((prev) => !prev);
      }
    };
    document.addEventListener("mouseup", handleClick);
    return () => document.removeEventListener("mouseup", handleClick);
  }, [showmenu]);

  return (
    <StyleSheetManager enableVendorPrefixes>
      <Wrapper bgColor={mode}>
        <Logo src="https://i.ibb.co/FHhWCkb/nlogo.png" alt="logo" />
        <Icon onClick={handleClick}>{icon}</Icon>
        <Menu showmenu={showmenu}>
          <Item>
            <Link activeClass="active" to="home" smooth duration={500} spy>
              Home
            </Link>
          </Item>
          <Item>
            <Link activeClass="active" to="about" smooth duration={500} spy>
              About
            </Link>
          </Item>
          <Item>
            <Link activeClass="active" to="portfolio" smooth duration={500} spy>
              Portfolio
            </Link>
          </Item>
          <Item>
            <Link activeClass="active" to="#" smooth duration={500} spy>
              Clients
            </Link>
          </Item>
          <Item>
            <Link activeClass="active" to="contactme" smooth duration={500} spy>
              <AiOutlineMessage />
              Contact me
            </Link>
          </Item>
        </Menu>
      </Wrapper>
    </StyleSheetManager>
  );
}

export default NavBar;

const black = `#252323`;
const white = `#ece7e7`;
const Wrapper = styled.div`
  height: 5rem;
  width: 100vw;
  margin: 0 auto;
  padding: 1rem 5rem;
  color: ${(props) => (props.bgColor === "night" ? "white" : "black")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 3;
  background-color: ${(props) => (props.bgColor === "night" ? black : white)};

  ${mobile({
    flexDirection: "column",
    minHeight: "13vh",
    position: "relative",
  })}

  ${tablet({
    flexDirection: "column",
    minHeight: "13vh",
    position: "relative",
  })}
`;

const Menu = styled.nav`
  display: flex;
  align-items: center;
  transition: all 0.3s ease;

  ${mobile({
    flexDirection: "column",
    top: "5.6rem",
    right: "1.7rem",
    backgroundColor: "RGB(0, 0, 0, 0.5)",
    width: "40vw",
    position: "absolute",
    display: (props) => (props.showmenu ? "flex" : "none"),
  })}

  ${tablet({
    flexDirection: "column",
    top: "5.6rem",
    right: "1.7rem",
    backgroundColor: "RGB(0, 0, 0, 0.5)",
    width: "40vw",
    position: "absolute",
    display: (props) => (props.showmenu ? "flex" : "none"),
  })}
`;

const Item = styled.div`
  margin: 1rem;
  text-align: center;
  cursor: pointer;

  &:last-child {
    font-size: 1.1rem;
    padding: 0.8rem 1.2rem;
    color: #000;
    background-color: white;
    border-radius: 2rem;
    font-weight: 500;

    &:hover {
      background-color: #a18c15;
      color: white;
    }

    ${mobile({
      fontSize: "0.8rem",
      fontWeight: "300",
    })}
  }

  &:hover {
    color: yellow;
    padding-bottom: 0.5rem;
    border-bottom: solid 3px yellow;
  }

  ${mobile({
    width: "100%",
    margin: "0.5rem",
  })}

  ${tablet({
    width: "100%",
    margin: "0.5rem",
  })}
`;

const Logo = styled.img`
  width: 4rem;
  object-fit: cover;

  ${mobile({
    width: "3rem",
  })}

  ${tablet({
    width: "3rem",
  })}
`;

const Icon = styled.div`
  font-size: 2rem;
  font-weight: 600;
  padding: 0.5rem;
  top: 1rem;
  right: 2rem;
  position: absolute;
  display: none;

  ${mobile({
    display: "block",
  })}

  ${tablet({
    display: "block",
  })}
`;
