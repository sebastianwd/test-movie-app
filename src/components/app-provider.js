import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { UserProvider } from '~/contexts/user-context'

const AppProvider = (props) => {
  const { children } = props

  return (
    <SafeAreaProvider>
      <UserProvider>{children}</UserProvider>
    </SafeAreaProvider>
  )
}

export default AppProvider
