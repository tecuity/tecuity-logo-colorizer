import React from 'react'
import styled from '@emotion/styled'

const COLORS = ["#93D500", "#F47821", "#A3A3A3", "#D3202B", "#FFD91D", "#2C58C4"]

const ColorToolbar = ({selectedColor, onSelected}) => {

  return (
    <Wrapper>
      {
        COLORS.map(color => (
          <ColorButton onClick={() => onSelected(color)} color={color} key={color}>
            <Center>
              {
                color === selectedColor ?
                <SelectedDot/>
                : null
              }
            </Center>
          </ColorButton>
        ))
      }
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  margin-top: 100px;
  max-width: 550px;
`

export const ColorButton = styled('button')`
  background: ${props => props.color};
  width: 75px;
  height: 75px;
  border-radius: 4px;
  border: none;
  padding: 0px;
  margin: 0px;
  &:focus{
    outline: none;
  }
  &:hover{
    opacity: .9;
  }
  &:active{
    opacity: .8;
  }
`

export const Center = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SelectedDot = styled('div')`
  width: 20px;
  height: 20px;
  border-radius: 100%;
  background: #fff;
`

export default ColorToolbar