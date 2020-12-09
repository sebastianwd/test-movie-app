import { useContext } from 'react'
import { UserContext } from '~/contexts/user-context'

const useUser = () => {
  const [user, setUser] = useContext(UserContext)

  return {
    user,
    setUser,
  }
}

export default useUser
