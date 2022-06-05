import React from "react";
import styled from "styled-components";
import subscribe from "../assets/27.jpg";
import img from "../assets/1.webp";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Subscribe() {
  return (
    <Section id="mówią">
      <div className="content">
        <h2>O Jerzym Treli</h2>
        <p>
          Wielka olśniewająca rola. Od pierwszego ujęcia, jakby zastygłej maski.
          Strup, po wódzie i po życiu. Zator myślowy, chód tabetyka. Aktorstwo
          oszczędne, a tak wyważone, że najdrobniejszy sygnał uderza jasnością
          intencji. Jak choćby ten aktorski majstersztyk, kiedy skacowany i
          spięty łyknął nareszcie - i powieki z ulgą osunęły się o ułamek
          milimetra, spojrzenie wyrównało, głos uspokoił i przechodzi monotonnie
          rozluźniające frazy.
        </p>
        <p>
          <em>
            "Sztuka o rozpaczy", "Wiadomości Kulturalne" 26 lutego 1995, nr 9
          </em>
        </p>

        {/* <div className="input-container">
          <input type="text" placeholder="Subscribe" />
          <BsFillArrowRightCircleFill />
        </div> */}
        <div className="image">
          <img src={subscribe} alt="..." />
          <img src={img} alt="..." />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 9rem;
  gap: 10rem;
  margin-bottom: 5rem;
  .image {
    display: flex;
    justify-content: space-around;

    img {
      width: 30rem;
      height: 45rem;
      object-fit: cover;
      margin-right: 5rem;

      :nth-child(2) {
        margin-right: 0;
      }
    }
  }
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 3rem;

    h2 {
      font-size: 3rem;
      font-family: "Freckle Face", cursive;
    }
    p {
      color: #7b7e86;
      line-height: 2rem;
      font-family: "Pattaya", sans-serif;
      font-size: 1.3rem;
    }
    em {
      font-size: 1.1rem;
    }
    .input-container {
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: max-content;
      gap: 1rem;
      border: 1px solid #c4c4c4;
      border-radius: 3rem;

      svg {
        color: #2d69fd;
        font-size: 3rem;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 0 2rem;
    gap: 2rem;
    margin-bottom: 2rem;
    .image {
      display: flex;
      flex-direction: column;
      /* justify-content: center;
      align-items: center; */
      margin: 0 auto;
      img {
        width: 100%;
        height: 29rem;
        margin-bottom: 1rem;
      }
    }
    .content {
      gap: 1rem;
      h2 {
        font-size: 2rem;
      }
      p {
        line-height: 1.4rem;
        font-size: 1.1rem;
      }
      .input-container {
        display: none;
        width: max-content;
        input {
          width: 50%;
        }
      }
    }
  }
`;
