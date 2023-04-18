// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(${props => props.directionValue});
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`
export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  text-align: center;
  font-size: 24px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const DirectionsDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
`

export const DirectionItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`
export const ColorPickerHeader = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 22px;
  line-height: 1.5;
`
export const CustomInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 320px;
`
export const InputAndColorValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ColorValue = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
`
export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`
export const GenerateButton = styled.button`
  height: 40px;
  width: 100px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 900;
  background-color: #00c9b7;
  padding: 10px 20px 10px 20px;
  margin-top: 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`
