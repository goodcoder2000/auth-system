import React,{ useContext} from 'react'
import { View, Text} from 'react-native'
import { AuthContext } from '../context/AuthContext'

export default function Test() {

  const { name } = useContext(AuthContext)
  return (
    <View>
      <Text>
        {name}
      </Text>
    </View>
  )
}
