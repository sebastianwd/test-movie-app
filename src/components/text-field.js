import React, { useEffect, memo } from 'react'
import { TextInput } from 'react-native'

const TextField = memo((props) => {
  const { name, required, formProps, ...rest } = props

  const { register, setValue, clearError } = formProps

  useEffect(() => {
    register && register({ name }, { required })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChangeText = (text) => {
    setValue && setValue(name, text)

    clearError && clearError(name)
  }

  return <TextInput onChangeText={onChangeText} {...rest} />
})

export default TextField
