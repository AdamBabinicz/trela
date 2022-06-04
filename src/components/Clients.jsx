import React from "react";
import styled from "styled-components";
import client1 from "../assets/2.jpg";
import client2 from "../assets/4.jpg";
import client3 from "../assets/6.jpg";
import client4 from "../assets/7.jpg";
import client5 from "../assets/10.jpg";

export default function Clients() {
  const clients = [client1, client2, client3, client4, client5];

  return (
    <Section>
      {clients.map((client, index) => {
        return (
          <div className="client" key={index}>
            <img src={client} alt="..." />
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 5rem;

  .client {
    img {
      width: 13rem;
      height: 10rem;
      object-fit: cover;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-wrap: wrap;
    margin: 2rem;

    .client {
      img {
        margin: 1rem;
      }
    }
  }
`;
