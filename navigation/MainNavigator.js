import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import MainScreen from '../views/mainScreen'
import PeopleScreen from '../views/peopleScreen'

const Stack = createNativeStackNavigator()

const MainNavigator = () => (
    <NavigationContainer initialRouteName='Home'>
        <Stack.Screen name='Home' component={MainScreen} />
        <Stack.Screen name='People' component={PeopleScreen} />
    </NavigationContainer>
)

export default MainNavigator