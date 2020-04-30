import { createContext, useContext } from 'react'
export default () => {
  return useContext(createContext('dark'))
}
