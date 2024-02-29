import React, { useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import hero from "../assets/1.png";
import heroText from "../assets/3.png";
import Button from "../components/Button";
import Modal from "../components/Portal/Modal";
import Modal1 from "../components/Portal/Modal";

export default function Home() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);

  return (
    <Section id="start">
      <Navbar />
      <div className="ellipse"></div>
      <div className="container">
        <div className="content">
          <h1>
            Jerzy
            <span>
              &nbsp;
              <img src={heroText} alt="..." />
              &nbsp;
            </span>
            Trela
          </h1>
          <p>
            Konrad Jerzego Treli zdaje się mówić: buntuję się, więc jestem. To
            nie jest bunt historyczny w tym znaczeniu, jaki temu pojęciu
            nadawali egzystencjaliści, bunt o odzyskanie wolności w
            społeczeństwie, ale raczej bunt metafizyczny. Wyzwanie skierowane
            przeciwko Bogu, który dopuścił w świecie zło, skazał człowieka na
            cierpienie i śmierć.
          </p>
          <div className="buttons">
            <button onClick={() => Toggle()}>
              <Button blue text="Czytaj" />
            </button>
            <Modal show={modal} close={Toggle} title="Dzięcielina">
              <p>
                Trela gra rozpacz po stracie dziecka, które zeszło na złą drogę,
                ale też ból człowieka, do którego świadomości dociera nagle, że
                świat nie jest wcale taki, jakim go dotychczas postrzegał - jest
                gorszy. Gdy żaląc się do Boga patrzy nam prosto w oczy,
                przeistacza się z prowincjonalnego poczciwca w postać ze sztuki
                klasycznej.
              </p>
              <br />
              <p>
                <em>
                  Zdzisław Pietrasik, "Dziecielina", "Polityka" 16 grudnia 2000,
                  nr 51.
                </em>
              </p>
            </Modal>
            <button onClick={() => Toggle1()}>
              <Button text="Więcej" />
            </button>
            <Modal1 show={modal1} close={Toggle1} title="Jestem ostrożny">
              <p>
                Chciałem stworzyć postać wiarygodnie podłą, szemraną,
                tchórzliwą, żądną pieniędzy... ale też starałem się zrozumieć i
                pokazać, dlaczego ten człowiek jest właśnie taki. Nie musiałem
                bronić Chilona. Obrony podjął się już sam Sienkiewicz,
                nawracając go i przywracając mu sumienie.
              </p>
              <br />
              <p>
                <em>
                  "Jestem ostrożny", wywiad w "Życiu Warszawy" 14 września 2001,
                  nr 215.
                </em>
              </p>
            </Modal1>
          </div>
          <div className="data">
            <div className="dataTab">
              <h2>Pedagog</h2>
              <h5>wychowawca wielu pokoleń artystów</h5>
            </div>
            <div className="dataTab">
              <h2>Profesor sztuk teatralnych</h2>
              <h5>rektor PWST 1984–1990</h5>
            </div>
            <div className="dataTab">
              <h2>Poseł</h2>
              <h5>na Sejm PRL IX kadencji</h5>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={hero} alt="..." />
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 0.5rem;
  background: #232835;
  border-radius: 1rem;
  position: relative;
  overflow: hidden;
  margin-bottom: 5rem;

  .ellipse {
    height: 30rem;
    width: 30rem;
    background: #ae54c27d;
    opacity: 0.5;
    border-radius: 100%;
    filter: blur(2000px);
    position: absolute;
    bottom: -30%;
    let: -10%;
    z-index: 1;
  }
  .container {
    padding: 2rem;
    margin: 0 2rem;
    display: flex;

    .content {
      z-index: 10;
      display: flex;
      flex-direction: column;
      gap: 2rem;
      margin-top: 5rem;
      padding-right: 2rem;

      h1 {
        color: #fff;
        font-size: 5rem;
        font-family: "Freckle Face", cursive;
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        justify-content: center;
      }
      img {
        width: 6rem;
        height: 100%;
        object-fit: contain;
      }
      p {
        font-family: "Pattaya", sans-serif;
        color: #a6a6a6;
        font-size: 1.5rem;
      }
      .buttons {
        display: flex;
        gap: 2rem;
      }
      .data {
        display: flex;
        gap: 5rem;

        .dataTab {
          display: flex;
          flex-direction: column;
          gap: 1rem;

          h2 {
            color: #fff;
            font-size: 2rem;
            font-family: "Freckle Face", cursive;
          }
          h5 {
            text-align: center;
            color: #a6a6a6;
            font-family: "Pattaya", sans-serif;
            font-size: 1.2rem;
          }
        }
      }
    }
    .image {
      img {
        height: 40rem;
      }
    }
  }

  @media screen and (min-width: 280px) and (max-width: 1280px) {
    margin: 0;
    border-radius: 0;
    .container {
      flex-direction: column;
      margin: 0;
      padding: 2rem;
      gap: 2rem;
      justify-content: center;
      align-items: center;
      .content {
        padding-right: 0;
        h1 {
          font-size: 3rem;
          text-align: center;
          span {
            img {
              position: absolute;
              top: -3rem;
              left: 50%;
              transform: translateX(-50%);
              height: 3rem;
            }
          }
        }
        p {
          font-size: 1.1rem;
        }
        .buttons {
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .data {
          flex-direction: column;
          gap: 2rem;
          text-align: center;
        }
      }
      .image {
        img {
          height: 15rem;
        }
      }
    }
  }
`;
