import React from 'react'
import HomeStack from './routes/HomeStack'
import {AuthProvider} from './context/AuthContext'
import Test from './screens/Test'

export default function App() {
  return (
    <AuthProvider>
        <HomeStack/>
        {/* <Test/> */}
    </AuthProvider>
  )
}
