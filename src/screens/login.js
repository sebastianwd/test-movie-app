import React from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard } from 'react-native'
import styled from 'styled-components/native'
import { Button, TextField } from '~/components'
import { useUser } from '~/hooks'

const LoginScreen = () => {
  const { setUser } = useUser()

  const { register, setValue, handleSubmit, errors } = useForm()

  const onSubmit = async () => {
    Keyboard.dismiss()

    setUser(true)
  }

  const formProps = {
    register,
    setValue,
  }

  return (
    <Container>
      <Title>Welcome</Title>
      <TextField
        name="user"
        placeholder="User"
        formProps={formProps}
        required
        autoCapitalize="none"
      />
      <ErrorLabel style={{ color: 'red' }}>
        {errors.user && 'This field is required'}
      </ErrorLabel>
      <TextField
        name="password"
        placeholder="Password"
        autoCapitalize="none"
        formProps={formProps}
        required
        autoCorrect={false}
        secureTextEntry={true}
      />
      <ErrorLabel style={{ color: 'red' }}>
        {errors.password && 'This field is required'}
      </ErrorLabel>
      <Button title="Login" onPress={handleSubmit(onSubmit)} />
    </Container>
  )
}

const Title = styled.Text`
  font-size: 24px;
  text-align: center;
  margin-bottom: 12px;
`

const Container = styled.View`
  padding: 20px 10px;
  height: 100%;
  justify-content: center;
`

const ErrorLabel = styled.Text`
  color: red;
  margin-bottom: 8px;
  font-size: 12px;
`

export default LoginScreen
