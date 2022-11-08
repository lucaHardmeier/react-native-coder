import React from 'react'
import { globalStyles } from '../../globalStyles'
import { useState } from 'react';
import { Button, FlatList, Text, View, } from 'react-native';
import { AddMember, CustomModal, MemberContainer } from '../../components';
import colors from '../../constants/colors';
import { useDispatch, useSelector } from 'react-redux';
import { addMember, loadMembers } from '../../store/actions/membersActions.js';
import { useEffect } from 'react';

const MembersScreen = ({ navigation, changeView }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [memberName, setMemberName] = useState('')

    const members = useSelector(state => state.members)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchDb = async () => {
            dispatch(await loadMembers())
        }
        fetchDb()
            .catch(err => console.log(err))
    }, [])

    const handleAddMember = async () => {
        dispatch(await addMember(memberName))
        setMemberName('')
        setModalVisible(true)
    }

    const handleChangeText = (text) => {
        setMemberName(text)
    }

    const renderMembers = ({ item }) => <MemberContainer item={item} />

    return (
        <View style={globalStyles.page}>
            <Text style={globalStyles.title1} >Agrega una referencia para la persona:</Text>
            <AddMember
                memberName={memberName}
                onChangeText={handleChangeText}
                addMember={handleAddMember}
            />
            <FlatList
                data={members}
                renderItem={renderMembers}
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

export default MembersScreen