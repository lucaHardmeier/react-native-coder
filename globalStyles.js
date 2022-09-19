import { StyleSheet } from "react-native";
import colors from "./constants/colors";

export const globalStyles = StyleSheet.create({
    page: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 40,
        paddingHorizontal: 20
    },
    title1: {
        fontFamily: 'AleoBold',
        fontSize: 50,
        alignSelf: 'flex-start'
    }
});