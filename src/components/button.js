import React from 'react'
import styled from 'styled-components/native'

const Container = styled.TouchableOpacity`
  padding: 8px 4px;
  background-color: ${(props) => props.color || '#4066B6'};
  border-radius: 4px;
`

const StyledText = styled.Text`
  text-align: center;
  color: ${(props) => props.color || 'white'};
`
const Button = (props) => {
  return (
    <Container activeOpacity={0.8} {...props}>
      <StyledText color={props.color}>{props.title}</StyledText>
    </Container>
  )
}

export default Button
