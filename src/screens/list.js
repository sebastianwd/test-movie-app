import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import { MOVIE_API_TOKEN } from '@env'
import { CURRENT_YEAR, MOVIE_API_URL, routes } from '~/utils/constants'
import styled from 'styled-components/native'
import { Card } from '~/components'

const ListScreen = (props) => {
  const { navigation } = props

  const [items, setItems] = useState([])

  const onListItemPress = (item) => {
    navigation.navigate(routes.DETAILS, {
      item,
    })
  }

  const renderItem = ({ item }) => {
    return (
      <Card
        imageUrl={item.poster_path}
        title={item.title}
        onPress={() => onListItemPress(item)}
      />
    )
  }

  useEffect(() => {
    Axios.get(`${MOVIE_API_URL}`, {
      params: {
        primary_release_year: CURRENT_YEAR,
        sort_by: 'popularity.desc',
        api_key: MOVIE_API_TOKEN,
      },
    }).then((res) => setItems(res.data.results))
  }, [])

  return (
    <Container>
      <FlatList
        data={items}
        numColumns={2}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </Container>
  )
}

const Container = styled.SafeAreaView`
  flex-grow: 1;
`

export default ListScreen
