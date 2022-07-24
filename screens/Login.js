import React,{ useState, useContext} from 'react'
import { View, Text, TextInput, Button, Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {AuthContext } from '../context/AuthContext'


export default function Login({navigation}) {
    const [ phoneno, setphoneno] = useState(null)
    const [ password, setPassword] = useState(null)
    const { setIslogin } = useContext(AuthContext)

    const storeData = async () =>{
        const usersData = {
            "phoneno": phoneno,
            "password": password
        }
        if(phoneno === null || password === null){
            Alert.alert('warning', 'check phNo and pass')
        } else {
            try {
                await AsyncStorage.setItem('usersData', JSON.stringify(usersData))
                setIslogin(true)
            } catch (error) {
                console.log(error)
            }
        }
    }   

    
  return (
   
        <View style={{flex: 1,backgroundColor: 'lightgray'}} 
            

        >
            <Text>{phoneno}</Text>
            <Text>{password}</Text>
            <TextInput
            style={{borderWidth: 1,}}
            placeholder="Phone No"
            onChangeText={ value => setphoneno(value)}
            />

            <TextInput
            style={{borderWidth: 1,}}
            placeholder="password"
            onChangeText={ value => setPassword(value)}
            />  
            {console.log('heloo')}

            <Button title='Login'
            onPress={ storeData }
            />
            </View>
  )
}
