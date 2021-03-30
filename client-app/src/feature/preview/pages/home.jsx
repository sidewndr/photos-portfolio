import React from 'react';
import styled from "styled-components";
import {LabelArrow} from "../atoms/label-arrow";
import {MainContent} from "../organisms/main-content";
import {Navbar} from "../../navbar/organisms/navbar";

const HomeStl = styled.div`
  display: flex;
  flex-direction: column;
  
  min-height: 100%;
`

const WrapperStl = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  max-width: 1600px;
  width: 100%;

  //LabelArrow
  & > div:nth-child(1){
    margin: 0.625rem 0 2.875rem 9.625rem;
  }

  //MainContent
  & > div:nth-child(2){
    align-self: center;
  }
`

export const Home = () => (
  <HomeStl>
    <Navbar type={"lang"} />
    <WrapperStl>
      <LabelArrow text={"Выберите свой язык!"} />
      <MainContent />
    </WrapperStl>
  </HomeStl>
)