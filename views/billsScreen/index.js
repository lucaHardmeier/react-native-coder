import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '../../globalStyles'

const BillsScreen = () => {
    return (
        <View style={globalStyles.page}>
            <Text style={globalStyles.title1} >Cuentas:</Text>
            <Text>BillsScreen</Text>
        </View>
    )
}

export default BillsScreen