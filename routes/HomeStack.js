import React, { useEffect, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home';
import Login from '../screens/Login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/AuthContext';

const Stack = createStackNavigator();

export default function HomeStack() {
  const {islogined, setIslogin} = useContext(AuthContext)

  const loginCheck = async () =>{
    try {
      await AsyncStorage.getItem('usersData')
      .then(value =>{
        if(value !== null){
          setIslogin(true)
        } 
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() =>{
    loginCheck()
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>

      {
        islogined?
        (
            <Stack.Screen name='Home' component={Home}/>
        ): 
        (
          <Stack.Screen name='Login' component={Login}/>
        )
        }
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}
