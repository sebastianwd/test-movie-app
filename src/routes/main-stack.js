import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ListScreen, DetailScreen } from '~/screens'
import { routes } from '~/utils/constants'

const Stack = createStackNavigator()

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={routes.LIST} component={ListScreen} />
      <Stack.Screen name={routes.DETAILS} component={DetailScreen} />
    </Stack.Navigator>
  )
}
