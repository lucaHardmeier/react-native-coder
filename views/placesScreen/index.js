import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../globalStyles.js'
import { styles } from './styles.js'
import * as ImagePicker from 'expo-image-picker';

const PlacesScreen = () => {

    const [image, setImage] = useState()

    const verifyPermissions = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()

        if (status !== 'granted') {
            Alert.alert(
                'Permisos insuficientes',
                'Necesita dar permisos a la cámara para usar esta funcionalidad',
                [{ text: 'OK' }]
            )
            return false
        }
        return true
    }

    const handlerTakeImg = async () => {
        const isCameraOk = verifyPermissions()
        if (!isCameraOk) return

        const img = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.8
        })

        if (!img.cancelled)
            setImage(img.uri)
    }

    return (
        <View style={globalStyles.page}>
            <Text style={globalStyles.title1} >Agrega una foto y la ubicación de un lugar:</Text>
            <TextInput />
            {image
                ? <Image style={styles.img} source={{ uri: image }} />
                : <Text>Selecciona una imagen para continuar</Text>}
            <TouchableOpacity onPress={handlerTakeImg}>
                <Text>Tomar foto</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PlacesScreen