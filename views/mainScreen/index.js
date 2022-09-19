import React from 'react'
import { Button, Text, View } from 'react-native'
import colors from '../../constants/colors'
import { globalStyles } from '../../globalStyles'
import { styles } from './styles'

const MainScreen = ({ changeView }) => {
    return (
        <>
            <Text style={globalStyles.title1} >OrganiVacas:</Text>
            <Text style={globalStyles.title1} >La app que organiza tus vacaciones por vos</Text>
            <View style={styles.menuContainer}>
                <Button
                    title='Agregar personas'
                    onPress={() => changeView('people')}
                    color={colors.secondary}
                />
                <Button
                    title='Gastos'
                    onPress={() => changeView('gastos')}
                    color={colors.secondary}
                />
            </View>
        </>
    )
}

export default MainScreen