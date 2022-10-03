import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import colors from '../constants/colors'
import MainScreen from '../views/mainScreen'
import PeopleScreen from '../views/peopleScreen'

const Stack = createNativeStackNavigator()

const MainNavigator = () => (
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerTitleStyle: {
                fontFamily: 'AleoBold',
            },
            headerTitleAlign: 'center',
            headerStyle: {
                backgroundColor: colors.black
            },
            headerTintColor: colors.primary
        }}
    >
        <Stack.Screen name='Home' component={MainScreen} />
        <Stack.Screen name='People' component={PeopleScreen} />
    </Stack.Navigator>
)

export default MainNavigator