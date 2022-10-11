import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import LoginNavigator from './LoginNavigator.js'
import TabNavigator from './TabNavigator'

const AppNavigator = () => {

    const [isLogged, setIsLogged] = useState(true)

    return (
        < NavigationContainer >
            {isLogged
                ? <TabNavigator />
                : <LoginNavigator />}
        </NavigationContainer >
    )
}

export default AppNavigator