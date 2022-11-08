import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    title: {
        fontSize: 40
    },
    img: {
        width: '100%',
        height: 200,
        marginVertical: 10,
        borderWidth: 3,
        borderColor: colors.black
    },
    container: {
        width: '100%',
        padding: 10
    }
});