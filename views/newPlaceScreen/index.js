import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../globalStyles.js'
import { styles } from './styles.js'
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons'
import colors from '../../constants/colors.js';

const NewPlaceScreen = () => {

    const [image, setImage] = useState()
    const [title, setTitle] = useState("")
    const [telephoneNum, setTelephoneNum] = useState("")
    const [notes, setNotes] = useState("")

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

    const onChangeTitle = (text) => {
        setTitle(text)
    }
    const onChangeTel = (text) => {
        setTelephoneNum(text)
    }
    const onChangeNotes = (text) => {
        setNotes(text)
    }
    const handleSubmit = () => {

    }

    return (
        <View style={globalStyles.page}>
            <Text style={{ ...globalStyles.title1, ...styles.title }} >Completa los datos de la nueva ubicación:</Text>
            <View style={styles.container}>
                <TextInput
                    style={globalStyles.input}
                    placeholder='Nombre del lugar'
                    onChangeText={onChangeTitle}
                    value={title}
                />
                <TextInput
                    style={globalStyles.input}
                    placeholder='Teléfono'
                    onChangeText={onChangeTel}
                    value={title}
                />
                <TextInput
                    style={globalStyles.input}
                    placeholder='Notas'
                    onChangeText={onChangeNotes}
                    value={title}
                />
                {image && <Image style={styles.img} source={{ uri: image }} />}
                <TouchableOpacity onPress={handlerTakeImg}>
                    <Ionicons
                        name={'camera'}
                        size={40}
                        style={styles.icon}
                        color={colors.black}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit}>
                    <Text style={globalStyles.button}>Agregar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NewPlaceScreen