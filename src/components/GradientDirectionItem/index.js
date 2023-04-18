// Write your code here
import {DirectionItemContainer, DirectionItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItems, isActive, getActiveDirection} = props
  const {displayText, value} = directionItems

  const onClickChangeDirection = () => {
    getActiveDirection(value)
  }

  return (
    <DirectionItemContainer>
      <DirectionItem isActive={isActive} onClick={onClickChangeDirection}>
        {displayText}
      </DirectionItem>
    </DirectionItemContainer>
  )
}

export default GradientDirectionItem
