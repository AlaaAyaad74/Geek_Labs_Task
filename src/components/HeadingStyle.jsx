import styled from "styled-components";

export default styled.div`
  .first__line {
    display: flex;
    align-items: center;
  }
  .left__cont {
    background-color: #181818;
    display: flex;
    width: 100%;
    height: 70px;
    padding: 0px 12px;
    border-radius: 19px;
    align-items: center;
  }
  .logo img {
    width: 150px;
    height: 70px;
    object-fit: cover;
    transform: scale(2);
  }
  input {
    width: 388px;
    padding: 0 2.5em;
    color: #202224;
    background-color: #f5f6fa;
    outline: none;
    border: none;
    height: 38px;
    border-radius: 19px;
    font-weight: 400;
    box-sizing: border-box;
    font-family: "Nunito Sans", sans-serif !important;
  }
  input::placeholder {
    font-weight: 400;
    font-family: "Nunito Sans", sans-serif !important;
  }
  .icon {
    fill: #554db7;
    width: 30px;
    height: 30px;
  }
  .link__notify {
    position: relative;
    margin-inline-end: 12px;
  }
  .info {
    display: flex;
    justify-content: end;
    width: 100%;
    align-items: center;
    font-family: "Nunito Sans", sans-serif !important;
  }
  .link__notify .notify__num {
    background-color: green;
    width: 8px;
    height: 16px;
    color: #ffffff;
    font-size: 12px;
    position: absolute;
    top: -3px;
    right: 5px;
    font-weight: 700;
    border-radius: 12px;
    text-align: center;
    font-family: "Nunito Sans", sans-serif !important;
  }
  .user__info {
    width: 169px;
    height: 44px;
    display: flex;
    margin-right: 20px;
  }
  .user__info .profile {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-inline-end: 12px;
  }
  .user__info .text {
    color: #5c5c5c;
    margin: auto;
  }
  .user__info .text p {
    margin: 0;
    font-family: "Nunito Sans", sans-serif !important;
  }
  .angle__down {
    display: flex;
    align-items: center;
  }
  .angle__down svg {
    margin-inline-start: 15px;
    border: 1px solid #5c5c5c;
    border-radius: 50%;
    padding: 2px;
    width: 8px;
    height: 8px;
    fill: #5c5c5c;
  }
  @media (max-width: 825px) {
    .left__cont {
      flex-direction: column;
      height: auto;
      padding: 1rem 0.5rem;
      gap: 0.5rem;
      align-items: center;
    }
    .info {
      justify-content: space-around;
    }
    .left__cont input {
      width: 100%;
      margin: auto;
    }
  }
  @media (max-width: 470px) {
    .first__line {
      flex-direction: column;
    }
    .left__cont {
      width: -webkit-fill-available;
    }
  }
`;
