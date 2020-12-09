import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ListScreen, DetailScreen } from '~/screens'
import { CURRENT_YEAR, routes } from '~/utils/constants'

const Stack = createStackNavigator()

export const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.LIST}
        component={ListScreen}
        options={() => ({ title: `Movies ${CURRENT_YEAR}` })}
      />
      <Stack.Screen
        name={routes.DETAILS}
        component={DetailScreen}
        options={({ route }) => ({ title: route.params.item.title })}
      />
    </Stack.Navigator>
  )
}
