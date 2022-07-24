import React,{createContext, useState} from 'react'

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [ islogined, setIslogin] = useState(false)
  return (
    <AuthContext.Provider
    value={{
      islogined,
      setIslogin
    }}
    >
        {children}
    </AuthContext.Provider>
  ) 
}
export { AuthContext, AuthProvider}
