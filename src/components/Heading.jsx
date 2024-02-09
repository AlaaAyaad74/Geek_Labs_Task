import React, { useEffect } from "react";
import styled from "styled-components";
import { IoMdNotifications } from "react-icons/io";

import { FaAngleDown } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import HeadingStyle from "./HeadingStyle";
import AOS from "aos";
import "aos/dist/aos.css";

function Heading() {
  const Titles = [
    {
      text: "Trading",
      active: false,
    },
    { text: "Automation", active: false },
    {
      text: "Portfolio",
      active: false,
    },
    {
      text: "Alerts",
      active: true,
    },
    {
      text: "Training",
      active: false,
      coming: false,
    },
  ];
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <HeadingStyle>
      <div className="first__line" data-aos="fade-down">
        <div className="logo">
          <img src="./logo.png" alt="logo" />
        </div>

        <div className="left__cont">
          <div style={{ width: "100%" }}>
            <IoIosSearch
              style={{
                position: "absolute",
                transform: "Translate(10px,10px)",
              }}
            />
            <input type="text" placeholder="Search"></input>
          </div>
          <div className="info">
            <a href="#" className="link__notify">
              <div className="notify__num">6</div>
              <IoMdNotifications className="icon" />
            </a>
            <div className="user__info">
              <img src="./profile.jpg" alt="profile" className="profile" />
              <div className="text">
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    lineHeight: "19px",
                  }}
                >
                  Alaa Ayaad
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    lineHeight: "16px",
                  }}
                >
                  Admin
                </p>
              </div>
              <a href="" className="angle__down">
                <FaAngleDown style={{ marginInlineStart: "12px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*********Second__Line***********/}
      <SecondLineStyle>
        <div className="second__line" data-aos="fade-up">
          <ul>
            {Titles.map((item, index) => (
              <li key={index}>
                {item.active ? (
                  <a href="#" className="active">
                    {item.text}
                  </a>
                ) : (
                  <a href="">
                    {item.text}

                    {item.coming === false ? (
                      ""
                    ) : (
                      <div className="hint">
                        <p>coming soon</p>{" "}
                      </div>
                    )}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </SecondLineStyle>
    </HeadingStyle>
  );
}

export default Heading;
const SecondLineStyle = styled.div`
  margin: 10px 0;
  background-color: #181818;
  border-radius: 15px;
  font-family: "Inter", sans-serif;
  ul {
    margin: 0;
    padding: 7px;
    display: flex;
    list-style: none;
    height: 115px;
    align-items: center;
    overflow: hidden;
    margin: 0 10px;
    /* flex-wrap: wrap; */
  }
  ul li {
    /* width: 100%; */
    height: 48px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 100%;
  }
  ul li:not(:first-child) {
    border-left: 1.47px solid #b9b9b9;
  }
  ul li a {
    font-size: 48px;
    font-weight: 700;
    height: 48px;
    padding: 0 20px;
    width: 100%;
    color: #4848484d;
    /* margin: 0 1.65rem; */
    position: relative;
    display: flex;
    justify-content: center;
  }
  ul li .active {
    color: #fff;
  }
  .hint {
    width: 101px;
    height: 19px;
    font-size: 12px;
    border-radius: 12px;
    color: #fff;
    background-color: #554db7;
    position: absolute;
    top: -15px;

    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .hint p {
    margin: 0;
  }
  @media (max-width: 1260px) {
    height: auto;

    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      padding: 20px;
      row-gap: 14px;
    }
    ul li:nth-child(4n) {
      border: none;
    }
  }
  @media (max-width: 880px) {
    ul {
      grid-template-columns: repeat(2, 1fr);
      gap: 25px;
      height: auto;
    }
    ul li {
      padding: 20px 0;
      border-left: none !important;
      border-bottom: 1.47px solid #b9b9b9;
    }
    ul li:nth-child(5n) {
      border: none;
    }
  }
  @media (max-width: 690px) {
    ul {
      grid-template-columns: repeat(1, 1fr);
    }
    ul li:nth-child(4n) {
      border-bottom: 1.47px solid #b9b9b9;
    }
    ul li a {
      margin: 0;
      padding: 0;
      width: fit-content;
    }
  }
`;
