import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '../../globalStyles.js'
import { styles } from './styles.js'
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons'
import colors from '../../constants/colors.js';
import { useDispatch } from 'react-redux';
import { addPlace } from '../../store/actions/placesActions.js';

const NewPlaceScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState("")
    const [img, setImg] = useState()
    const [telephoneNum, setTelephoneNum] = useState("")
    const [adress, setAdress] = useState("")

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
            setImg(img.uri)
    }

    const onChangeTitle = (text) => {
        setTitle(text)
    }
    const onChangeTel = (text) => {
        setTelephoneNum(text)
    }
    const onChangeAdress = (text) => {
        setAdress(text)
    }
    const handleSubmit = async () => {
        dispatch(await addPlace(title, img, telephoneNum, adress))
        navigation.navigate('Places')
    }

    return (
        <View style={globalStyles.page}>
            <Text style={{ ...globalStyles.title1, ...styles.title }} >Completa los datos de una nueva ubicación:</Text>
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
                    value={telephoneNum}
                />
                <TextInput
                    style={globalStyles.input}
                    placeholder='Dirección'
                    onChangeText={onChangeAdress}
                    value={adress}
                />
                {img && <Image style={styles.img} source={{ uri: img }} />}
                <TouchableOpacity onPress={handlerTakeImg}>
                    <Ionicons
                        name={'camera'}
                        size={40}
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