import AsyncStorage from '@react-native-async-storage/async-storage'

const storage = {
  get: async (key) => {
    try {
      const item = await AsyncStorage.getItem(key)

      return JSON.parse(item)
    } catch {
      return
    }
  },
  set: async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch {
      return
    }
  },
  remove: async (key) => {
    try {
      await AsyncStorage.removeItem(key)
    } catch {
      return
    }
  },
  clear: async () => {
    try {
      await AsyncStorage.clear()
    } catch {
      return
    }
  },
}

export default storage
