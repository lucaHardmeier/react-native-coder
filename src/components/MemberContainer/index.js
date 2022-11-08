import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import colors from '../../constants/colors'
import { removeMember } from '../../store/actions/membersActions.js'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'

const MemberContainer = ({ item }) => {

    const dispatch = useDispatch()

    const handleDelete = async (id) => {
        dispatch(await removeMember(id))
    }

    return (
        <View style={styles.noDebt}>
            <Text style={styles.text}>{`${item.id} - ${item.name}`}</Text>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Ionicons
                    name={'trash'}
                    size={20}
                    color={colors.black}
                />
            </TouchableOpacity>
        </View>
    )
}

export default MemberContainer