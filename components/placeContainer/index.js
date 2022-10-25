import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles.js'

const PlaceContainer = ({ title, img, telephoneNum, notes }) => {
    console.log(img)
    return (
        <View style={styles.placeContainer}>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{telephoneNum}</Text>
                <Text style={styles.text}>{notes}</Text>
            </View>
            {img && <Image style={styles.imgContainer} source={{ uri: img }} />}
        </View>
    )
}

export default PlaceContainer