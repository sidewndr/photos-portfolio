import React from "react";
import styled from "styled-components";

const VerticalLabelStl = styled.div`
  font-family: 'Solena', serif;
  font-weight: 400;
  font-size: 6.25rem;
  line-height: 7.5rem;
  text-align: right;
  color: #14402D;
  opacity: 60%;
  transform: rotate(180deg);
  writing-mode: vertical-lr;
  user-select: none;
`

export const VerticalLabel = ({text}) => {
  return (
    <VerticalLabelStl>{text}</VerticalLabelStl>
  )
}