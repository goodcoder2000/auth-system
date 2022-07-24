import React, { useContext, useEffect, useState} from 'react'
import { View, Text, Button} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../context/AuthContext';

export default function Home({navigation}) {
    const [ data, setdata] = useState(null);
    const { setIslogin } = useContext(AuthContext)

    useEffect(() =>{
      gettingData()
    },[])

    const gettingData = () =>{
      try {
        AsyncStorage.getItem('usersData')
        .then(value => setdata(JSON.parse(value)))
      } catch (error) {
        console.log(error)
      }
    }

    

    const removeUser = async () =>{
      try {
        await AsyncStorage.removeItem('usersData');
        setIslogin(false)
      } catch (error)   {
        console.log(error)
      }
    }
  return (
    <View>
        <Text>Home</Text>
        {data && <Text>{data.phoneno}</Text>}
        <Button title='remove user'
        onPress={ removeUser }
        />
    </View>
  )
}
