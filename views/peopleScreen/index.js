import React from 'react'
import { globalStyles } from '../../globalStyles'
import { useState } from 'react';
import { Button, FlatList, Text, View, } from 'react-native';
import { AddPerson, CustomModal, PersonContainer } from '../../components/index';
import colors from '../../constants/colors';

const PeopleScreen = ({ navigation, changeView }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [person, setPerson] = useState('')
    const [money, setMoney] = useState('')
    const [people, setPeople] = useState([])

    const handleAddPerson = () => {
        setPeople((prevPeople) => [
            ...prevPeople,
            { id: Date.now(), name: person, money: +money }
        ])
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
        <PersonContainer item={item} setPeople={setPeople} />
    )

    return (
        <View style={globalStyles.page}>
            <Text style={globalStyles.title1} >Agrega una referencia para la persona y cuanto te adeuda:</Text>
            <AddPerson
                onChangeText={handleChangeText}
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