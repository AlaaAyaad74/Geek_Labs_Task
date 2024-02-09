import React from "react";
import Filter from "./Filter";
import Alerts from "./Alerts";
import { styled } from "styled-components";

function FilterandAlert() {
  return (
    <MainStyle>
      <Filter />
      <Alerts />
    </MainStyle>
  );
}

export default FilterandAlert;
const MainStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  background-color: #181818;
  height: 822px;
  border-radius: 15px;
  justify-content: center;
  align-content: center;
  gap: 2rem;
  padding: 0 55px;

  @media (max-width: 1280px) {
    height: auto;
    grid-template-columns: 1fr;
    padding: 2rem;
  }
`;
