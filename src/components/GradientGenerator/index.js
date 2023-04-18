import {Component} from 'react'

import {
  AppContainer,
  ResponsiveContainer,
  Heading,
  DirectionsDescription,
  DirectionItemsList,
  ColorPickerHeader,
  CustomInputContainer,
  InputAndColorValueContainer,
  ColorValue,
  CustomInput,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeGradientDirection: gradientDirectionsList[0].value,
    colorInput1: '#8ae323',
    colorInput2: '#014f7b',
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b `,
  }

  onGenerateGradient = () => {
    const {colorInput1, colorInput2, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${colorInput1}, ${colorInput2}`,
    })
  }

  changeGradientColor1 = event => {
    this.setState({colorInput1: event.target.value})
  }

  changeGradientColor2 = event => {
    this.setState({colorInput2: event.target.value})
  }

  getActiveDirection = activeValue => {
    this.setState({activeGradientDirection: activeValue})
  }

  render() {
    const {
      activeGradientDirection,
      gradientValue,
      colorInput1,
      colorInput2,
    } = this.state

    return (
      <AppContainer
        directionValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <ResponsiveContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <DirectionsDescription>Choose Direction</DirectionsDescription>
          <DirectionItemsList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                directionItems={eachDirection}
                key={eachDirection.directionId}
                getActiveDirection={this.getActiveDirection}
                isActive={activeGradientDirection === eachDirection.value}
              />
            ))}
          </DirectionItemsList>
          <ColorPickerHeader>Pick the colors</ColorPickerHeader>
          <CustomInputContainer>
            <InputAndColorValueContainer>
              <ColorValue>{colorInput1}</ColorValue>
              <CustomInput
                type="color"
                value={colorInput1}
                onChange={this.changeGradientColor1}
              />
            </InputAndColorValueContainer>
            <InputAndColorValueContainer>
              <ColorValue>{colorInput2}</ColorValue>
              <CustomInput
                type="color"
                value={colorInput2}
                onChange={this.changeGradientColor2}
              />
            </InputAndColorValueContainer>
          </CustomInputContainer>
          <GenerateButton onClick={this.onGenerateGradient}>
            Generate
          </GenerateButton>
        </ResponsiveContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
