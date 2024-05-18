import React, { useContext } from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";
import { MyContext } from "../context/MyContext";

function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const { mode } = useContext(MyContext);

  return (
    <Wrapper bgColor={mode}>
      Copyright &#169; {currentYear} Bustlezach. All right reserved.
    </Wrapper>
  );
}

export default Footer;

const black = `#252323`;
const white = `#ece7e7`;
const Wrapper = styled.footer`
  background-color: ${(props) => (props.bgColor === "night" ? black : white)};
  color: ${(props) => (props.bgColor === "night" ? "white" : "black")};
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
