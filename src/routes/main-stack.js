import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ListScreen, DetailScreen } from '~/screens'
import { CURRENT_YEAR, routes } from '~/utils/constants'
import { Button } from '~/components'
import { useUser } from '~/hooks'

const Stack = createStackNavigator()

export const MainStack = () => {
  const { setUser } = useUser()

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.LIST}
        component={ListScreen}
        options={() => ({
          headerTitle: `Movies ${CURRENT_YEAR}`,
          headerRight: () => (
            <Button
              onPress={() => setUser(null)}
              title="Log out"
              style={{ marginRight: 8 }}
            />
          ),
        })}
      />
      <Stack.Screen
        name={routes.DETAILS}
        component={DetailScreen}
        options={({ route }) => ({
          headerTitle: route.params.item.title,
        })}
      />
    </Stack.Navigator>
  )
}
