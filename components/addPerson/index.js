import React from 'react'
import { Button, TextInput, View } from 'react-native'
import colors from '../../constants/colors'
import { styles } from './styles'

const AddPerson = ({ personName, onChangeText, money, onChangeMoney, addPerson, selectionColor, textButton }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder='Juan Pérez'
                selectionColor={selectionColor}
                placeholderTextColor={colors.secondary}
                onChangeText={onChangeText}
                value={personName}

            />
            {/* <TextInput
                style={styles.input}
                placeholder='50.80'
                selectionColor={selectionColor}
                placeholderTextColor={colors.secondary}
                onChangeText={onChangeMoney}
                value={money}
                keyboardType='numeric'
            /> */}
            <Button
                title={textButton}
                onPress={addPerson}
                color={colors.secondary}
            />
        </View>
    )
}

export default AddPerson