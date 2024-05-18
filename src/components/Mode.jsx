import React, { useContext } from "react";
import { Switch } from "@mui/material";
import { MyContext } from "../context/MyContext";
import styled from "styled-components";

function Mode() {
  const { mode, setMode } = useContext(MyContext);

  const handleClick = () => {
    setMode((prev) => (prev === "night" ? "day" : "night"));
  };

  return (
    <Container>
      <Part>
        <Desc color={mode}>Night</Desc>
        <svg
          class="w-[38px] h-[38px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="24"
          fill="blue"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z"
            clip-rule="evenodd"
          />
        </svg>
      </Part>
      <Btn onClick={handleClick}>
        {mode === "night" ? (
          <Switch size="small" />
        ) : (
          <Switch color="success" size="small" defaultChecked />
        )}
      </Btn>
      <Part>
        <svg
          class="w-[38px] h-[38px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="yellow"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z"
            clip-rule="evenodd"
          />
        </svg>

        <Desc>Day</Desc>
      </Part>
    </Container>
  );
}

export default Mode;

const Container = styled.p`
  display: flex;
  justify-content: end;
`;

const Btn = styled.button`
  border: none;
  margin: 0 0.2rem;
`;

const Desc = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0 0.2rem;
  margin: 0 0.2rem;
  color: ${props => props.color === 'night' ? "white" : "black"};
`;

const Part = styled.div`
  display: flex;
  align-items: center;
`;
