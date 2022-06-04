import React from "react";
import styled from "styled-components";
import sell1 from "../assets/6.png";
import sell2 from "../assets/5.png";
import sell3 from "../assets/7.png";
import sell4 from "../assets/8.png";
import Button from "./Button";

export default function CreateAndSell() {
  const data = [
    {
      image: sell1,
      title: "Dziady - Adam Mickiewicz",
      description: "reżyseria Konrad Swinarski",
      buttonText: "1983",
      link: "//encyklopediateatru.pl/artykuly/82410/jerzy-trela-o-roli-gustawa-konrada",
    },
    {
      image: sell2,
      title: "Kartoteka - Tadeusz Różewicz",
      description: "reżyseria Krzysztof Kieślowski",
      buttonText: "1979",
      link: "//teatrtv.vod.tvp.pl/598075/kartoteka-rez-k-kieslowski",
    },
    {
      image: sell3,
      title: "Wyzwolenie - Stanisław Wyspiański",
      description: "reżyseria Konrad Swinarski",
      buttonText: "1974",
      link: "//teatrtv.vod.tvp.pl/591896/wyzwolenie-rez-k-swinarski",
    },
    {
      image: sell4,
      title: "Szewcy - Stanisław Ignacy Witkiewicz",
      description: "reżyseria Jerzy Jarocki",
      buttonText: "1971",
      link: "//www.cyfrowemuzeum.stary.pl/przedstawienie/292/szewcy",
    },
  ];
  return (
    <Section id="kreacje">
      <div className="title">
        <h2>Niezapomniane kreacje Jerzego Treli</h2>
      </div>
      <div className="container">
        <div className="ellipse"></div>
        <div className="content">
          {data.map(
            ({ image, title, description, buttonText, link }, index) => {
              return (
                <div className="createAndSell" key={index}>
                  <div className="image">
                    <img src={image} alt="create and sell" />
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>

                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <Button text={buttonText} blue={index === 1} />
                  </a>
                </div>
              );
            }
          )}
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 0 6rem;
  margin-bottom: 5rem;
  .title {
    text-align: center;
    h2 {
      font-size: 3rem;
      font-family: "Freckle Face", cursive;
      margin-bottom: 4rem;
    }
  }
  .container {
    background: #232835;
    padding: 5rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    .ellipse {
      height: 30rem;
      width: 30rem;
      background: #ae54c27d;
      border-radius: 100%;
      filter: blur(2000px);
      opacity: 0.5;
      position: absolute;
      bottom: -30%;
      left: -10%;
      z-index: 1;
    }
    .content {
      display: flex;
      justify-content: space-evenly;
      gap: 3rem;

      .createAndSell {
        width: 100%;
        background: #ffffff34;
        z-index: 10;
        padding: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 1rem;
        border-radius: 1rem;
        .image {
          background: #2d69fd;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.8rem;
          width: max-content;
          border-radius: 50%;
          margin: auto;
          img {
            height: 4rem;
            width: 4rem;
            object-fit: cover;
          }
        }
        h3 {
          color: white;
          font-family: "Pattaya", sans-serif;
        }
        p {
          color: #c8c4cf;
          margin-bottom: 1rem;
          font-family: "Pattaya", sans-serif;
        }
        button {
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;
    .title {
      h2 {
        font-size: 2rem;
      }
    }
    .container {
      padding: 1rem;
      .content {
        flex-direction: column;
        gap: 1rem;
        text-align: center;
      }
    }
  }
`;
