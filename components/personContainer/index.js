import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import colors from '../../constants/colors'
import { styles } from './styles'

const PersonContainer = ({ item, setPeople }) => {

    const [debt, setDebt] = useState(true)

    const handleDelete = (id) => {
        setPeople((prevPeople) => prevPeople.filter(p => p.id !== id))
    }
    const handleFinish = () => {
        setDebt(!debt)
    }

    return (
        <View style={debt ? styles.debt : styles.noDebt}>
            <Text style={styles.text}>{`${item.name} - $${item.money}`}</Text>
            <Button
                color={colors.secondary}
                title='Borrar'
                onPress={() => handleDelete(item.id)}
            />
            <Button
                color={colors.secondary}
                title='Saldado'
                onPress={handleFinish}
            />
        </View>
    )
}

export default PersonContainer