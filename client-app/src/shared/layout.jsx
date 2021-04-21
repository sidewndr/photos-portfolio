import React from 'react'
import styled, {css} from 'styled-components'


export const Container = styled.div`
  ${props => props.limiter && css`
    width: 100%;
    max-width: 148.1481vmin;
  `}
  
  
  /*  Flex layouts  */
  
  ${props => props.flex && css`
    display: flex;

    //Columns
    ${props => props.column && css`
      flex-direction: column;

      ${props => props.h100 && css`
        height: 100vh;
      `}




      ${props => props.fit && css`
        min-width: 100%;
        width: 148.1481vmin;
      `}
    `}

    //Rows
    ${props => props.row && css`
      flex-direction: row;
    `}

    //Other mods
    ${props => props.center && css`
      align-items: center;
      justify-content: center;
    `}
  `}
`

export const Wrapper = styled.div``