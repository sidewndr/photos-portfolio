import React from "react";
import styled from "styled-components";
import {Menu} from "../molecules/menu";
import {Slider} from "./slider";

const MainContentStl = styled.div`
  position: relative;
  
  width: 81.625rem;
  display: flex;
  justify-content: flex-end;
  
  & > div:nth-child(1){
    position: absolute;
    z-index: 1;
    left: 0;
    top: 5.4375rem;
  }
`

export const MainContent = () => (
  <MainContentStl>
    <Menu />
    <Slider />
  </MainContentStl>
)