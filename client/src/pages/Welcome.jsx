import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img
        src={"https://media.tenor.com/CigpzapemsoAAAAi/hi-robot.gif"}
        alt="robo"
      />
      <h1 style={{ textAlign: "center" }}>
        Welcome <span style={{ color: "#0078ff" }}> {userName}!</span>
      </h1>
      <h3>to STACK BOX</h3>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin: auto;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #4e0eff;
  }
`;
