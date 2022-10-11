import React from 'react'
import Login from '../views/login/index.js'

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