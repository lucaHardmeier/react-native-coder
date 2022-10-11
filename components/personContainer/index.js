import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import colors from '../../constants/colors'
import { removePerson } from '../../store/actions/peopleActions.js'
import { styles } from './styles'

const PersonContainer = ({ item, setPeople }) => {

    const dispatch = useDispatch()

    const [debt, setDebt] = useState(true)

    const handleDelete = (id) => {
        dispatch(removePerson(id))
    }
    const handleFinish = () => {
        setDebt(!debt)
    }

    return (
        <View style={debt ? styles.debt : styles.noDebt}>
            <Text style={styles.text}>{`${item.name} - $${item.outgo}`}</Text>
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