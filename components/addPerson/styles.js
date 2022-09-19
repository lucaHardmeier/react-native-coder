import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 50,
        marginBottom: 20,
        marginHorizontal: 20,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    input: {
        borderBottomColor: '',
        borderBottomWidth: 1,
        marginBottom: 15,
        height: 40,
        color: '',
    },
    button: {
        color: colors.secondary,
        backgroundColor: colors.secondary,
        marginHorizontal: 5,
        fontFamily: 'AleoRegular'
    }
})