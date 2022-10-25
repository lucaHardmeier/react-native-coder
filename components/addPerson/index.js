import React from 'react'
import { Button, TextInput, View } from 'react-native'
import colors from '../../constants/colors'
import { globalStyles } from '../../globalStyles.js'
import { styles } from './styles'

const AddPerson = ({ personName, onChangeText, money, onChangeMoney, addPerson, selectionColor, textButton }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={globalStyles.input}
                placeholder='Juan Pérez'
                selectionColor={selectionColor}
                placeholderTextColor={colors.secondary}
                onChangeText={onChangeText}
                value={personName}
            />
            <Button
                title={textButton}
                onPress={addPerson}
                color={colors.secondary}
            />
        </View>
    )
}

export default AddPerson