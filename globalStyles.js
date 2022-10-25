import { StatusBar, StyleSheet } from "react-native";
import colors from "./constants/colors";

export const globalStyles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    title1: {
        fontFamily: 'AleoBold',
        fontSize: 50,
        alignSelf: 'flex-start',
        color: colors.black
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        borderBottomColor: '',
        borderBottomWidth: 1,
        marginBottom: 15,
        height: 40,
        color: '',
    },
    button: {
        alignSelf: 'flex-end',
        backgroundColor: colors.secondary,
        color: colors.white,
        padding: 10,
        fontSize: 25,
        fontFamily: 'AleoBold'
    }
});