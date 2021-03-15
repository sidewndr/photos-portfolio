import React from "react";
import styled from "styled-components";
import {Route, NavLink} from "react-router-dom"
import {MenuItems} from "../atoms/menu-items";
import {About} from "../../about/pages/about";

const MenuStl = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  position: relative;

  background-color: #133F2C;
  width: 210px;
  height: 390px;
  border-radius: 10px;
  padding-top: 50px;
  padding-left: 30px;

  div:not(:first-child){
    margin-top: 10px;
  }

  div:last-child{
    margin: 0;
  }
`

const MenuBackgroundStl = styled.div`
  position: absolute;
  z-index: -1;
  top: 15px;
  left: 14px;

  width: 210px;
  height: 390px;
  background-color: #FFFFFF;
  border-radius: 10px;
`

const Wrapper = styled.div`
  width: 224px;
  height: 405px;
`

export const Menu = () => (
  <Wrapper>
    <MenuStl>
      <Route path={"/about"} exact render={() => (<About />)} />
      <NavLink to={"/about"}>
        <MenuItems text={"Обо мне"} />
      </NavLink>

      <NavLink to={"/portfolio"}>
        <MenuItems text={"Портфолио"} />
      </NavLink>


      <MenuItems text={"Цена"} />
      <MenuItems text={"Контакты"} />

      <MenuBackgroundStl />
    </MenuStl>
  </Wrapper>
)

//TODO: router