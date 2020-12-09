import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { routes } from '~/utils/constants'
import { LoginScreen } from '~/screens'
import { MainStack } from './main-stack'
import { useUser } from '~/hooks'

const Stack = createStackNavigator()

const Navigators = () => {
  const { user } = useUser()

  const renderNavigators = () => {
    if (!user) {
      return (
        <Stack.Screen
          name={routes.LOGIN}
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
      )
    }

    return (
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={routes.APP}
        component={MainStack}
      />
    )
  }

  return <Stack.Navigator mode="modal">{renderNavigators()}</Stack.Navigator>
}

export default Navigators
