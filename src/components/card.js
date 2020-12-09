import React from 'react'
import styled from 'styled-components/native'
import FastImage from 'react-native-fast-image'
import { MOVIE_IMAGE_URL } from '~/utils/constants'
import { Text } from 'react-native'

const Card = (props) => {
  const { imageUrl, title, onPress } = props

  return (
    <Container activeOpacity={0.8} onPress={onPress}>
      <Content>
        <Image
          source={{
            uri: `${MOVIE_IMAGE_URL}${imageUrl}`,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Footer>
          <Text>{title}</Text>
        </Footer>
      </Content>
    </Container>
  )
}

const Footer = styled.View`
  padding: 8px;
`

const Content = styled.View`
  background-color: white;
  border-radius: 8px;
`

const Container = styled.TouchableOpacity`
  padding: 8px;
  padding-top: 0;
  width: 50%;
`

const Image = styled(FastImage)`
  height: 250px;
`

export default Card
