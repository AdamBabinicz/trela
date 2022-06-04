import React from "react";
import styled from "styled-components";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import {
  FaTwitterSquare,
  FaInstagramSquare,
  FaPinterest,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiHastyGrave, GiDeathNote } from "react-icons/gi";
import logo from "../assets/3.png";

export default function Footer() {
  const servicesLinks = [
    <a
      href="//pl.wikipedia.org/wiki/Jerzy_Trela"
      target="_blank"
      rel="noopener noreferrer"
    >
      Wiki
    </a>,
    <a
      href="//culture.pl/pl/tworca/jerzy-trela"
      target="_blank"
      rel="noopener noreferrer"
    >
      Culture
    </a>,
    <a
      href="//www.filmpolski.pl/fp/index.php?osoba=11803"
      target="_blank"
      rel="noopener noreferrer"
    >
      Film Polski
    </a>,
    <a
      href="//www.pap.pl/aktualnosci/news%2C1210776%2Cnie-zyje-aktor-jerzy-trela-mial-80-lat.html"
      target="_blank"
      rel="noopener noreferrer"
    >
      Pap
    </a>,
    <a
      href="//stary.pl/pl/actor/jerzy-trela-goscinnie-2"
      target="_blank"
      rel="noopener noreferrer"
    >
      Stary Teatr
    </a>,
  ];
  const companyLinks = [
    <a href="#start">Start</a>,
    <a href="#kreacje">Kreacje</a>,
    <a href="#miłość">Miłość</a>,
    <a href="#fototeka">Fototeka</a>,
    <a href="#mówią">Mówią</a>,
  ];

  const contactInfo = [
    {
      icon: <MdEmail />,
      value: "puaro@vp.pl",
    },
    {
      icon: <GiDeathNote />,
      value: "14.03.1942 - 15.05.2022",
    },
    {
      icon: <GiHastyGrave />,
      value: `"49°53'48.1"N 19°44'24.4"E"`,
    },
  ];
  const socialIcons = [
    <a
      href="//m.facebook.com/story.php?story_fbid=5150609511652496&id=114083575305140&_rdr"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillFacebook />,
    </a>,
    <a
      href="//twitter.com/krakow_pl/status/1503420006796869634"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaTwitterSquare />,
    </a>,
    <a
      href="//www.scenastu.pl/zespol/jerzy-trela"
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiFillGoogleCircle />,
    </a>,
    <a
      href="//pl.pinterest.com/pin/546342998526075480"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaPinterest />,
    </a>,
  ];
  return (
    <Container id="kontakt">
      <div className="row">
        <div className="brand">
          <img src={logo} alt="logo" />
        </div>
        <p className="description">Radom, 2022 - {new Date().getFullYear()}.</p>
        <div className="social-icons">
          {socialIcons.map((icon) => {
            return <div className="icon">{icon}</div>;
          })}
        </div>
      </div>
      <div className="out">
        <div className="row">
          <h3>Ciekawe</h3>
          <ul className="list">
            {servicesLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
        <div className="row">
          <h3>Linki</h3>
          <ul className="list">
            {companyLinks.map((link) => {
              return <li key={link}>{link}</li>;
            })}
          </ul>
        </div>
      </div>
      <div className="row">
        <h3>Info</h3>
        <ul>
          {contactInfo.map(({ icon, value }) => {
            return (
              <li>
                <div className="icon">{icon}</div>
                <span>{value}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
}
const Container = styled.footer`
  background: #443357;
  background: linear-gradient(to right, #443357, #394053);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 8rem;
  gap: 7rem;
  width: 100%;

  .out {
    display: flex;
    justify-content: space-evenly;
  }

  .row {
    color: #9ea7ad;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    .brand img {
      width: 5rem;
      height: 5rem;
      object-fit: contain;
    }
    h3 {
      color: #fff;
    }
    .description {
      color: #fff;
    }
    .social-icons {
      display: flex;
      gap: 1rem;
      .icon {
        padding: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;
        cursor: pointer;
        outline: none;

        svg {
          transition: 0.4s ease-in-out;
          color: #fff;
          font-size: 1.5rem;

          :hover {
            opacity: 0.6;
          }
        }
      }
    }
    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      li {
        display: flex;
        gap: 2rem;
        display: flex;
        align-items: center;

        a {
          color: #9ea7ad;
          transition: 0.4s ease-in-out;
          text-decoration: none;

          :hover {
            opacity: 0.6;
          }
        }

        .icon a {
          border: 1px solid #2d68fd7f;
          padding: 0.2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.3rem;

          svg {
            color: #fff;
            font-size: 1.5rem;
            transition: 0.4s ease-in-out;

            :hover {
              opacity: 0.6;
            }
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 1rem;
    padding: 1rem;
    gap: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    align-items: center;
    margin: auto;
  }
`;
