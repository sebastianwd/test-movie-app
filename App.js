import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Navigators } from '~/routes'
import { AppProvider } from '~/components'

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Navigators />
      </NavigationContainer>
    </AppProvider>
  )
}

export default App
