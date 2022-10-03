import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabNavigator from './TabNavigator'

const AppNavigator = () => (
    <NavigationContainer>
        <TabNavigator />
    </NavigationContainer>
)

export default AppNavigator