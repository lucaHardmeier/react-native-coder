import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const PersonContainer = ({ item, setPeople }) => {

    const [debt, setDebt] = useState(true)

    const handleDelete = (id) => {
        setPeople((prevPeople) => prevPeople.filter(p => p.id !== id))
    }
    const handleFinish = (person) => {
        setDebt(!debt)
    }


    return (
        <View style={debt ? styles.debt : styles.noDebt}>
            <Text style={styles.text}>{`${item.name} - $${item.money}`}</Text>
            <Button
                style={styles.peopleButton}
                title='Borrar'
                onPress={() => handleDelete(item.id)}
            />
            <Button
                style={styles.peopleButton}
                title='Saldado'
                onPress={handleFinish}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    debt: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#1c1c1c'
    },
    noDebt: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'green'
    },
    text: {
        color: '#fff',
        marginRight: 10
    },
    peopleButton: {
        color: '#fff',
        backgroundColor: 'black',
        marginHorizontal: 5
    }
});

export default PersonContainer