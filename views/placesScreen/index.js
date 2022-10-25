import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { globalStyles } from '../../globalStyles.js'
import { styles } from './styles.js'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../constants/colors.js'
import { PlaceContainer } from '../../components/index.js'
import { useDispatch, useSelector } from 'react-redux'
import { loadPlaces } from '../../store/actions/placesActions.js'

const PlacesScreen = ({ navigation }) => {

    const places = useSelector(state => state.places)
    const dispatch = useDispatch()

    useEffect(() => {

        const fetchDb = async () => {
            dispatch(await loadPlaces())
        }
        fetchDb()
            .catch(err => console.log(err))
    }, [])

    const renderItem = ({ item }) => (
        <PlaceContainer
            title={item.title}
            img={item.img}
            telephoneNum={item.telephoneNum}
            adress={item.adress}
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