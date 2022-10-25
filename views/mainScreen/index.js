import React from 'react'
import { Button, Text, View } from 'react-native'
import colors from '../../constants/colors'
import { globalStyles } from '../../globalStyles'
import { styles } from './styles'

const MainScreen = ({ navigation }) => {
    return (
        <View style={globalStyles.page}>
            <Text style={globalStyles.title1} >OrganiVacas:</Text>
            <Text style={globalStyles.title1} >La app que organiza tus vacaciones por vos</Text>
            <View style={styles.menuContainer}>
                <Button
                    title='Agregar personas'
                    onPress={() => navigation.navigate('People')}
                    color={colors.secondary}
                />
                <Button
                    title='Gastos'
                    onPress={() => navigation.navigate('Home')}
                    color={colors.secondary}
                />
                <Button
                    title='Lugares'
                    onPress={() => navigation.navigate('Places')}
                    color={colors.secondary}
                />
            </View>
        </View>
    )
}

export default MainScreen