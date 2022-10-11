import React from 'react'
import { globalStyles } from '../../globalStyles'
import { useState } from 'react';
import { Button, FlatList, Text, View, } from 'react-native';
import { AddPerson, CustomModal, PersonContainer } from '../../components/index';
import colors from '../../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { addPerson } from '../../store/actions/peopleActions.js';

const PeopleScreen = ({ navigation, changeView }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [person, setPerson] = useState('')
    const [money, setMoney] = useState('')

    const dispatch = useDispatch()

    const people = useSelector(state => state)

    console.log(people)

    const handleAddPerson = () => {
        dispatch(addPerson(person))
        setPerson('')
        setMoney('')
        setModalVisible(true)
    }

    const handleChangeText = (text) => {
        setPerson(text)
    }
    const handleChangeMoney = (text) => {
        setMoney(text)
    }

    const renderPeople = ({ item }) => (
        <PersonContainer item={item} />
    )

    return (
        <View style={globalStyles.page}>
            <Text style={globalStyles.title1} >Agrega una referencia para la persona:</Text>
            <AddPerson
                person onChangeText={handleChangeText}
                onChangeMoney={handleChangeMoney}
                textButton='Agregar Deudor'
                addPerson={handleAddPerson}
                personName={person}
                money={money}
            />
            <FlatList
                data={people}
                renderItem={renderPeople}
                keyExtractor={item => item.id}
            />
            <CustomModal
                animationType='slide'
                visible={modalVisible}
            >
                <Text>Persona agregada correctamente</Text>
                <Button
                    title='aceptar'
                    onPress={() => setModalVisible(false)}
                    color={colors.secondary}
                />
            </CustomModal>
        </View>
    )
}

export default PeopleScreen