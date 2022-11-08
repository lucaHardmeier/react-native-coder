import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    debt: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: colors.primary
    },
    noDebt: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: colors.success
    },
    text: {
        marginRight: 10,
        fontFamily: 'AleoRegular'
    }
});