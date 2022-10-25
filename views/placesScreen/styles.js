import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: colors.primary
    },
    scrollView: {
        flex: 0,
        alignItems: 'flex-start'
    },
    img: {
        width: '100%',
        height: 200
    },
    placesContainer: {
        width: '100%'
    }
});