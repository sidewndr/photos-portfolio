import React from 'react'
import styled, {css} from 'styled-components'


export const Row = styled.div`
  display: flex;
  flex-direction: row;
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  
  ${props => props.h100 && css`
    height: 100vh;
  `}
`

export const Container = styled.div`
  ${props => props.flexRowCenter && css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `}  
  
  ${props => props.flexColumnCenter && css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`

export const Wrapper = styled.div`
  ${props => props.w1600 && css`
    width: 148.1481vh;
    //width: 100%;
    max-width: 1600px;
  `}
`