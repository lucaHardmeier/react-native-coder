import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import colors from '../constants/colors'
import MainScreen from '../views/mainScreen'
import PeopleScreen from '../views/peopleScreen'
import PlacesScreen from '../views/placesScreen/index.js'

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
        <Stack.Screen name='Places' component={PlacesScreen} />
    </Stack.Navigator>
)

export default MainNavigator