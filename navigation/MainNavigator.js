import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import colors from '../constants/colors'
import MainScreen from '../views/mainScreen'
import NewPlaceScreen from '../views/newPlaceScreen/index.js'
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
        <Stack.Screen name='People' options={{ title: 'Personas' }} component={PeopleScreen} />
        <Stack.Screen name='Places' options={{ title: 'Lugares' }} component={PlacesScreen} />
        <Stack.Screen name='NewPlace' options={{ title: 'Agregar Lugar' }} component={NewPlaceScreen} />
    </Stack.Navigator>
)

export default MainNavigator