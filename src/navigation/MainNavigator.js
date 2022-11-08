import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import colors from '../constants/colors'
import MainScreen from '../views/MainScreen'
import NewPlaceScreen from '../views/NewPlaceScreen/index.js'
import MembersScreen from '../views/MembersScreen'
import PlacesScreen from '../views/PlacesScreen/index.js'

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
        <Stack.Screen name='People' options={{ title: 'Personas' }} component={MembersScreen} />
        <Stack.Screen name='Places' options={{ title: 'Lugares' }} component={PlacesScreen} />
        <Stack.Screen name='NewPlace' options={{ title: 'Agregar Lugar' }} component={NewPlaceScreen} />
    </Stack.Navigator>
)

export default MainNavigator