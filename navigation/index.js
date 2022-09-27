import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import MainNavigator from './MainNavigator'

const AppNavigator = () => (
    <NavigationContainer>
        <MainNavigator />
    </NavigationContainer>
)

export default AppNavigator