import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaEthereum } from "react-icons/fa";

import styled from "styled-components";
import marketplace1 from "../assets/28.jpg";
import marketplace2 from "../assets/1.jfif";
import marketplace3 from "../assets/29.jpg";
import marketplace4 from "../assets/30.jpg";
import marketplace5 from "../assets/14.jpg";
import marketplace6 from "../assets/3.jfif";
import marketplace7 from "../assets/11.jpg";
import marketplace8 from "../assets/2.webp";
import Button from "./Button";

export default function MarketPlace() {
  const marketPlaceData = [
    {
      image: marketplace1,
      name: "Aiboi-meta",
    },
    {
      image: marketplace2,
      name: "Pedram-mohamm...",
    },
    {
      image: marketplace3,
      name: "Eduardo-pena",
    },
    {
      image: marketplace4,
      name: "Daeho-cha",
    },
    {
      image: marketplace5,
      name: "Justine-florentino",
    },
    {
      image: marketplace6,
      name: "Hoang-l-p-solan",
    },
    {
      image: marketplace7,
      name: "Joshua-jay",
    },
    {
      image: marketplace8,
      name: "Joshua-jay",
    },
  ];
  const marketPlaceType = [
    "All",
    "Art",
    "Generic",
    "Common",
    "Trading",
    "Rare",
  ];
  return (
    <Section id="fototeka">
      <div className="title">
        <h2>Fototeka</h2>
        <p>
          W przedstawieniach Jerzego Jarockiego, Konrada Swinarskiego, Andrzeja
          Wajdy, Kazimierza Kutza i Krystiana Lupy zagrał role różnorodne: od
          epizodów po bohaterów pierwszego planu, role, które należą do
          największych osiągnięć polskiego aktorstwa. Najpierw Jerzy Jarocki
          zobaczył w nim aktora charakterystycznego, o zdolnościach do
          deformacji. Zagrał więc Czeladnika w "Szewcach" (1971) i przewrotnego
          Agenta Murdel-Bęskiego w "Matce" (1972) - słynnych inscenizacjach
          sztuk Witkacego.
        </p>
        <p>
          <em>culture.pl/pl/tworca/jerzy-trela</em>
        </p>
      </div>
      {/* <div className="marketPlaceTypes">
        {marketPlaceType.map((text, index) => {
          return <Button text={text} key={index} blue={index === 0} />;
        })}
      </div> */}
      <div className="marketPlaces">
        {marketPlaceData.map(({ image, name }) => {
          return (
            <div className="marketplace">
              <div className="image">
                <img src={image} alt="marketplace" />
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 0 6rem;
  margin-bottom: 5rem;

  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex-direction: column;

    h2 {
      font-size: 3rem;
      font-family: "Freckle Face", cursive;
    }
    p {
      color: #7b7e86;
      font-family: "Pattaya", sans-serif;
      font-size: 1.3rem;
    }
    em {
      font-size: 1.1rem;
    }
  }
  .marketPlaceTypes {
    display: flex;
    justify-content: center;
    gap: 2rem;

    button:not(.blue) {
      color: black;
      border-color: #7b7e86;
    }
  }
  .marketPlaces {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin: auto;

    .marketplace {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      padding: 0.5rem;
      border-radius: 1rem;
      /* width: max-content; */
      /* cursor: pointer; */
      transition: 0.5s ease-in-out;

      &:hover {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }
      .image {
        margin-bottom: 1rem;

        img {
          width: 15rem;
          /* width: 100%; */
          height: 15rem;
          /* max-height: 100%; */
          object-fit: cover;
        }
      }
      .name {
        display: flex;
        color: #222222;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;

        h4 {
          font-family: "Aladin", cursive;
        }
      }
      .username {
        color: #555555;
        font-size: 0.8rem;
        padding: 0 1rem;
        margin-bottom: 0.5rem;
      }
      .price-container {
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        color: #02204e;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 2rem;

    .title p {
      font-size: 1.1rem;
    }

    .marketPlaceTypes {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    }
    .marketPlaces {
      /* display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr)); */
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: 100%;
      gap: 0;
      overflow: hidden;

      .image {
        img {
          width: 11rem !important;
          height: 10rem !important;
        }
      }
    }
  }
`;
