import React from 'react'
import { Button, TextInput, View } from 'react-native'
import { styles } from './styles'

const AddPerson = ({ personName, onChangeText, money, onChangeMoney, addPerson, selectionColor, textButton }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder='Juan Pérez'
                selectionColor={selectionColor}
                // placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeText}
                value={personName}

            />
            <TextInput
                style={styles.input}
                placeholder='50.80'
                selectionColor={selectionColor}
                // placeholderTextColor={placeholderTextColor}
                onChangeText={onChangeMoney}
                value={money}

            />
            <Button
                title={textButton}
                onPress={addPerson}
            />
        </View>
    )
}

export default AddPerson