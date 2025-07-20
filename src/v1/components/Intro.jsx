import React, { useContext } from "react";
import styled from "styled-components";
import { FaSuitcase } from "react-icons/fa6";
import { Link } from "react-scroll";
import { mobile, tablet } from "../responsive";
import { MyContext } from "../context/MyContext";

function Intro() {
  const { mode } = useContext(MyContext);
  return (
    <Wrapper id="home">
      <IntroContent>
        <Greetings color={mode}>Hello,</Greetings>
        <Title color={mode}>
          I'm <Name> Oluwaseun</Name> <br></br>
          Website Designer
        </Title>
        <Introduction color={mode}>
          I am a skilled and passionate web designer with experience in creating
          visually appealing and user-friendly websites.
        </Introduction>
        <BtnContainer>
          <Button>
            <FaSuitcase />
            <Link to="about" smooth>
              <Buttonspan>Hire me</Buttonspan>
            </Link>
          </Button>
          <BtnResume>
            <Anchor href="https://drive.google.com/file/d/1hbAxhuoMZPvovfGgQhimhRmPopceeTH5/view?usp=sharing">
              <Buttonspan>Resume</Buttonspan>
            </Anchor>
          </BtnResume>
        </BtnContainer>
      </IntroContent>
      <IntroImg
        src="https://i.ibb.co/sjCMHW0/falling-rain.jpg"
        alt="self_img"
      />
    </Wrapper>
  );
}

export default Intro;

const Wrapper = styled.div`
  width: 85vw;
  margin: 0 auto;
  min-height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
    position: "relative",
    alignItems: "center",
  })}

  ${tablet({
    position: "relative",
    alignItems: "center",
  })}
`;

const IntroContent = styled.div`
  z-index: 2;

  ${mobile({
    padding: "0 1rem",
    justifyContent: "center",
  })}

  ${tablet({
    padding: "0 1rem",
    justifyContent: "center",
  })}
`;

const Greetings = styled.p`
  color: ${(props) => (props.color === "night" ? "white" : "black")};
`;

const Title = styled.h1`
  color: ${(props) => (props.color === "night" ? "white" : "black")};
`;

const Name = styled.span`
  color: #d4a300;
`;

const Introduction = styled.p`
  font-size: 0.8rem;
  letter-spacing: 0.08rem;
  color: ${(props) => (props.color === "night" ? "white" : "black")};
`;

const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

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

const BtnResume = styled.button`
  background-color: white;
  padding: 0.6rem 0.8rem;
  margin: 0.5rem 0;
  width: 7rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  cursor: pointer;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 2rem;
    background-color: yellow;
    z-index: -1;
    transform-origin: left;
    transform: scaleX(0);
    transition: 0.5s ease-in-out;
    border: none;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const Buttonspan = styled.span`
  font-size: 0.8rem;
`;

const Anchor = styled.a`
  text-decoration: none;
  color: black;
`;

const IntroImg = styled.img`
  /* width: 30vw; */
  height: calc(95vh - 5rem);
  width: 45vw;
  object-fit: cover;
  z-index: -1;

  ${mobile({
    width: "100%",
    position: "absolute",
    top: "0",
    right: "0",
    opacity: "0.5",
  })}

  ${tablet({
    width: "100%",
    position: "absolute",
    top: "0",
    right: "0",
    opacity: "0.5",
  })}
`;
