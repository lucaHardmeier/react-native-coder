import React from 'react'
import { Button, TextInput, View } from 'react-native'
import colors from '../../constants/colors'
import { globalStyles } from '../../globalStyles.js'
import { styles } from './styles'

const AddMember = ({ memberName, onChangeText, addMember }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={globalStyles.input}
                placeholder='Juan Pérez'
                selectionColor={colors.white}
                placeholderTextColor={colors.secondary}
                onChangeText={onChangeText}
                value={memberName}
            />
            <Button
                title='Agregar miembro'
                onPress={addMember}
                color={colors.secondary}
            />
        </View>
    )
}

export default AddMember