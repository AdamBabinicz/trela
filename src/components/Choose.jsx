import React, { useState } from "react";
import styled from "styled-components";
import choose from "../assets/18.jpg";
import Button from "./Button";
import Modal from "../components/Portal/Modal";

export default function Choose() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <Section id="miłość">
      <div className="image">
        <img src={choose} alt="..." />
      </div>
      <div className="content">
        <h2>Od przyjaźni do miłości aż po grób</h2>
        <p>
          Jerzy i Georgeta Trela byli nierozłączni. Kochali się i wspierali,
          spędzili u swojego boku 50 lat — w miłości, zaufaniu i szacunku. Aktor
          nazywał żonę Jerzynką i powtarzał, że bardzo dużo jej zawdzięcza.
          Ukochana artysty poświęciła swoje życie rodzinie, ale nigdy nie miała
          o to do nikogo żalu, wręcz przeciwnie. Bardzo dobrze odnalazła się w
          tej roli, wychowując dwójkę dzieci i troszcząc się o codzienność jej
          bardzo zajętego męża. Rozdzieliła ich dopiero śmierć... Georgeta Trela
          odeszła w 2015 roku.
        </p>
        <button onClick={() => Toggle()}>
          <Button text="Czytaj więcej" blue />
        </button>
        <Modal show={modal} close={Toggle} title="Historia miłości">
          <p>
            Znali się jeszcze z czasów liceum. Oboje utalentowani artystycznie,
            uczęszczali wtedy do szkoły plastycznej w Krakowie. Jerzy zwrócił
            uwagę Georgety już na pierwszych lekcjach. Po szkole od razu
            opowiedziała mamie, że w klasie jest jeden chłopiec, który wydał jej
            się bardzo dobry i uczciwy. Pierwszą okazję do rozmowy mieli podczas
            wspólnych wagarów. Tego dnia Jerzy usiadł obok niej w kinie i
            pogrążyli się w dyskusji.
          </p>
          <br />
          <p>
            <em>viva.pl/ludzie/newsy</em>
          </p>
        </Modal>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  gap: 3rem;
  margin: 0 9rem;
  margin-bottom: 5rem;

  .image img {
    width: 40rem;
    height: 100%;
    object-fit: cover;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 3rem;

    h2 {
      font-size: 3rem;
      font-family: "Freckle Face", cursive;
    }
    p {
      color: #7b7e86;
      font-family: "Pattaya", sans-serif;
      font-size: 1.3rem;
      line-height: 2rem;
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1280px) {
    flex-direction: column;
    margin: 2rem;
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 30rem;
      }
    }
    .content {
      gap: 1rem;
      h2 {
        font-size: 3rem;
      }
      p {
        line-height: 1.3rem;
        font-size: 0.9rem;
      }
    }
  }
`;
