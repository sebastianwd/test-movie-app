import React from 'react'
import Image from 'react-native-fast-image'
import { View } from 'react-native'
import { MOVIE_IMAGE_URL } from '~/utils/constants'
import styled from 'styled-components/native'

const DetailScreen = (props) => {
  const { item } = props.route.params

  return (
    <View>
      <Image
        source={{
          uri: `${MOVIE_IMAGE_URL}${item.backdrop_path}`,
          priority: Image.priority.normal,
        }}
        style={{ height: 200 }}
        resizeMode={Image.resizeMode.contain}
      />
      <InfoContainer>
        <Info>
          <TitleContainer>
            <Title>{item.title}</Title>
            <TextSecondary>{item.release_date}</TextSecondary>
          </TitleContainer>
          <TextSecondary>{item.vote_average}/10</TextSecondary>
          <TextSecondary>{item.overview}</TextSecondary>
        </Info>
      </InfoContainer>
    </View>
  )
}

const Info = styled.View`
  background-color: white;
  min-height: 100px;
  position: absolute;
  top: -20px;
  border-radius: 8px;
  padding: 8px 12px;
  width: 90%;
`

const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

const Title = styled.Text`
  font-size: 18px;
  margin-right: auto;
  max-width: 80%;
`

const TextSecondary = styled.Text`
  font-size: 14px;
  color: #323535;
`

const InfoContainer = styled.View`
  shadow-color: #000;
  shadow-offset: 5px 5px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
  align-items: center;
`

export default DetailScreen
