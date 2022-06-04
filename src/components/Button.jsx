import React from "react";
import styled from "styled-components";

export default function Button({ text, blue = false }) {
  return (
    <Div>
      <button className={`${blue ? "blue" : ""}`}>{text}</button>
    </Div>
  );
}

const Div = styled.div`
  button {
    border-radius: 4rem;
    padding: 0.8rem 2rem;
    border: none;
    color: #fff;
    font-size: 1.1rem;
    font-family: "Pattaya", sans-serif;
    cursor: pointer;
    transition: 0.4s ease-in-out;

    :not(.blue) {
      background: transparent;
      border: 1px solid #fff;
    }

    :hover {
      opacity: 0.6;
    }
  }
  .blue {
    background: #2d69fd;
  }
`;
