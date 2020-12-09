import React from 'react'
import { Keyboard } from 'react-native'
import styled from 'styled-components/native'
import { Button } from '~/components'
import { useUser } from '~/hooks'

const LoginScreen = () => {
  const { setUser } = useUser()

  const onSubmit = async () => {
    Keyboard.dismiss()

    try {
      setUser(true)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err)
    }
  }

  return (
    <Container>
      <StyledTextInput placeholder="Usuario" autoCapitalize="none" />
      <StyledTextInput
        placeholder="Contraseña"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />
      <Button title="Ingresar" onPress={onSubmit} />
    </Container>
  )
}

const Container = styled.View`
  padding: 20px 10px;
  height: 100%;
  justify-content: center;
`

const StyledTextInput = styled.TextInput`
  margin-bottom: 10px;
`

export default LoginScreen
