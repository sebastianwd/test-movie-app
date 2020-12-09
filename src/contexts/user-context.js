import React, { createContext, useMemo, useState, useEffect } from 'react'
import { storage } from '~/utils'
import { storageKeys } from '~/utils/constants'

export const UserContext = createContext([])

export const UserProvider = (props) => {
  const { children, user: initialUser } = props

  const [user, setUser] = useState(initialUser)

  const checkSavedUser = async () => {
    const savedUser = await storage.get(storageKeys.USER)

    console.log('savedUse123r', savedUser)

    if (savedUser) {
      setUser(savedUser)
    }
  }

  useEffect(() => {
    checkSavedUser()
  }, [])

  const saveUser = async (newUser) => {
    await storage.set(storageKeys.USER, newUser)

    console.log('newUser', newUser)

    setUser(newUser)
  }

  const contextValue = useMemo(() => [user, saveUser], [user])

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}
