import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
function Filter() {
  useEffect(() => {
    AOS.init();
  }, []);
  const risks = [
    {
      text: "Low risk",
      active: true,
    },
    {
      text: "Mid-risk",
      active: false,
    },
    {
      text: "High risk",
      active: false,
    },
    {
      text: "Option text here",
      active: false,
    },
  ];
  return (
    <FilterStyle data-aos="fade-right" data-aos-duration="2000">
      <h1>Filters</h1>
      <form>
        <div className="form__cont">
          <label htmlFor="cars">Industry</label>
          <div className="input__cont">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.35714 7.125L0.875 9L4.35714 10.875M4.35714 7.125L9 9.625L13.6429 7.125M4.35714 7.125L0.875 5.25L9 0.875L17.125 5.25L13.6429 7.125M13.6429 7.125L17.125 9L13.6429 10.875M13.6429 10.875L17.125 12.75L9 17.125L0.875 12.75L4.35714 10.875M13.6429 10.875L9 13.375L4.35714 10.875"
                stroke="#6B6B6B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input placeholder="Health care" type="" id="cars"></input>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 8L10 12L6 8"
                stroke="#040F0F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p>Choose something.</p>
        </div>
        <div className="form__cont">
          <label htmlFor="MarketCap">Market Cap</label>
          <div className="input__cont">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.35714 8.125L1.875 10L5.35714 11.875M5.35714 8.125L10 10.625L14.6429 8.125M5.35714 8.125L1.875 6.25L10 1.875L18.125 6.25L14.6429 8.125M14.6429 8.125L18.125 10L14.6429 11.875M14.6429 11.875L18.125 13.75L10 18.125L1.875 13.75L5.35714 11.875M14.6429 11.875L10 14.375L5.35714 11.875"
                stroke="#6B6B6B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input id="MarketCap" placeholder="Large-cap"></input>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 8L10 12L6 8"
                stroke="#040F0F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p>Press Apply to see changes.</p>
        </div>
        <div className="form__cont" style={{ height: "auto" }}>
          <label htmlFor="Risk">Risk</label>
          <div className="input__cont">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.35714 8.125L1.875 10L5.35714 11.875M5.35714 8.125L10 10.625L14.6429 8.125M5.35714 8.125L1.875 6.25L10 1.875L18.125 6.25L14.6429 8.125M14.6429 8.125L18.125 10L14.6429 11.875M14.6429 11.875L18.125 13.75L10 18.125L1.875 13.75L5.35714 11.875M14.6429 11.875L10 14.375L5.35714 11.875"
                stroke="#6B6B6B"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input id="Risk" placeholder="Insert text here"></input>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 8L10 12L6 8"
                stroke="#040F0F"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="list" style={{ marginTop: "5px" }}>
            {risks.map((item, index) => (
              <p
                key={index}
                style={{ border: "none" }}
                className={`${
                  item.active === true ? "active input__cont" : "input__cont"
                }`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 10.625L9.375 12.5L12.5 8.125M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                    stroke="#A3A3A3"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <input placeholder={`${item.text}`} type="" id="cars"></input>
              </p>
            ))}
          </div>
        </div>
        <div className="btn__action">
          <input type="submit" value="Apply Filters" id="submit" />
        </div>
      </form>
    </FilterStyle>
  );
}

export default Filter;

const FilterStyle = styled.div`
  height: 745px;
  background-color: #212121;
  border-radius: 15px;
  color: #fff;
  box-sizing: border-box;
  padding: 20px 15px;
  h1 {
    font-family: "Inter", sans-serif;
    font-size: 32px;
    margin: 0;
    height: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  form {
    font-family: "Poppins", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .input__cont {
    width: 318px;
    height: 24px;
    background-color: transparent;
    border: 1px solid #d6d6d6;
    border-radius: 8px;
    padding: 12px;
    color: #a3a3a3;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  label {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    height: 20px;
  }

  input {
    background-color: transparent;
    outline: none;
    border: none;
    width: 226px;
    height: 20px;
    color: #a3a3a3;
    font-size: 14px;
    font-family: "Poppins", sans-serif !important;
  }
  input::placeholder {
    color: #a3a3a3;
    font-size: 14px;
  }
  .form__cont {
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: "Poppins", sans-serif !important;
  }
  .form__cont p {
    margin: 0;
    font-size: 14px;
    height: 20px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }
  .list {
    border: 1px solid #d6d6d6;
    border-radius: 8px;
    height: 196px !important;
    display: flex;
    flex-direction: column;
    margin-top: 5px;
  }
  .list input {
    width: 262px;
  }
  .list .active {
    background-color: #fff;
  }
  .btn__action {
    height: 104px;
    height: 104px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  #submit {
    height: 70.43px;
    font-size: 24px;
    color: #fff;
    font-weight: 600;
    background-color: #554db7;
    border-radius: 14px;
    font-family: "Inter", sans-serif !important;
  }
  @media (max-width: 1280px) {
    display: flex;
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;
    form {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;
      align-content: center;
      align-items: center;
    }
  }
  @media (max-width: 820px) {
    form {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
