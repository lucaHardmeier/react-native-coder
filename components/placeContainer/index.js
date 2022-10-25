import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles.js'

const PlaceContainer = ({ title, img, telephoneNum, notes }) => {
    return (
        <View style={styles.placeContainer}>
            <View>
                <Text style={styles.title}>Título</Text>
                <Text style={styles.text}>Imagen</Text>
                <Text style={styles.text}>Número de telefono</Text>
                <Text style={styles.text}>Notas</Text>
            </View>
            <View style={styles.imgContainer}>

            </View>
        </View>
    )
}

export default PlaceContainer