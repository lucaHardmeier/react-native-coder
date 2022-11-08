import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Login from '../views/Login/index.js'

const Stack = createNativeStackNavigator()

const LoginNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}

export default LoginNavigator