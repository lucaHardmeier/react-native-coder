import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    placeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 130,
        marginVertical: 10,
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 10,
    },
    title: {
        fontFamily: 'AleoBold',
        color: colors.white,
        fontSize: 20
    },
    text: {
        color: colors.white,
        fontSize: 15
    },
    imgContainer: {
        height: 110,
        width: 110,
        backgroundColor: colors.black
    }
});