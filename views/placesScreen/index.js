import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { globalStyles } from '../../globalStyles.js'
import { styles } from './styles.js'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../constants/colors.js'
import { PlaceContainer } from '../../components/index.js'
import { useSelector } from 'react-redux'

const PlacesScreen = ({ navigation }) => {

    const places = useSelector(state => state.places)

    const renderItem = ({ item }) => (
        <PlaceContainer
            title={item.title}
            img={item.img}
            telephoneNum={item.telephoneNum}
            notes={item.notes}
        />)

    return (
        <View style={globalStyles.page}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title1} >Tus lugares</Text>
                <TouchableOpacity onPress={() => navigation.navigate('NewPlace')}>
                    <Ionicons
                        name={'add-circle'}
                        size={40}
                        color={colors.black}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                style={styles.flatList}
                nestedScrollEnabled
                showsVerticalScrollIndicator={false}
                data={places}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default PlacesScreen