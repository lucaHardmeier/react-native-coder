import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import MainNavigator from './MainNavigator'
import { Ionicons } from '@expo/vector-icons'
import colors from '../constants/colors'
import BillsScreen from '../views/BillsScreen'

const BottomTabs = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName='MainTab'
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: 'AleoBold',
                    color: colors.primary
                },
                tabBarStyle: {
                    backgroundColor: colors.black
                }
            }}
        >
            <BottomTabs.Screen
                name='MainTab'
                component={MainNavigator}
                options={{
                    title: 'Inicio',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'home' : 'home-outline'}
                            size={22}
                            color={colors.primary}
                        />
                    )
                }}
            />
            <BottomTabs.Screen
                name='BillsTab'
                component={BillsScreen}
                options={{
                    title: 'Cuentas',
                    tabBarIcon: ({ focused }) => (
                        <Ionicons
                            name={focused ? 'cash' : 'cash-outline'}
                            size={22}
                            color={colors.primary}
                        />
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
}

export default TabNavigator