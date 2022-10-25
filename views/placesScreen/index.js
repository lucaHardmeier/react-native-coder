import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { globalStyles } from '../../globalStyles.js'
import { styles } from './styles.js'
import { Ionicons } from '@expo/vector-icons'
import colors from '../../constants/colors.js'
import { PlaceContainer } from '../../components/index.js'
import { SafeAreaView } from 'react-native-safe-area-context'

const PlacesScreen = ({ navigation }) => {

    return (
        <View style={styles.scrollContainer}>
            <ScrollView contentContainerStyle={[globalStyles.page, styles.scrollView]}>
                <View style={globalStyles.header}>
                    <Text style={globalStyles.title1} >Tus lugares</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('NewPlace')}>
                        <Ionicons
                            name={'add-circle'}
                            size={40}
                            style={styles.icon}
                            color={colors.black}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.placesContainer}>
                    <PlaceContainer />
                    <PlaceContainer />
                    <PlaceContainer />

                </View>
            </ScrollView>
        </View>
    )
}

export default PlacesScreen