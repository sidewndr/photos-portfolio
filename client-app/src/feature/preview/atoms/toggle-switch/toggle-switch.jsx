import React, { useState } from "react";
import styled from "styled-components";

const ToggleSwitchStl = styled.div`
  position: relative;
  width: 70px;
  height: 35px;
`

const CheckBoxStl = styled.input`
  display: none;
  
  &:checked + label {
    //background-color: ;
    &::after{
      margin-left: 35px;
      
      content: "";
      display: block;
      box-sizing: border-box;
      width: 35px;
      height: 35px;
      border: #FFFFFF 0.5px solid;
      opacity: 70%;
      border-radius: 18px;
      background-color: #133F2C;
      transition: .3s;
    }
}
`

const SliderStl = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 35px;
  border-radius: 18px;
  background-color: #FFFFFF;
  cursor: pointer;
  
  &::after{
    content: "";
    display: block;
    box-sizing: border-box;
    width: 35px;
    height: 35px;
    border: #FFFFFF 0.5px solid;
    opacity: 70%;
    border-radius: 18px;
    background-color: #133F2C;
    transition: .3s;
  }
`

export const ToggleSwitch = ({onToggle}) => {
  const [] = useState()

  return (
    <ToggleSwitchStl>
      <CheckBoxStl type={"checkbox"} id={"checkbox"}/>
      <SliderStl
        for={"checkbox"}
        onClick={onToggle}
      />
    </ToggleSwitchStl>
  )
}