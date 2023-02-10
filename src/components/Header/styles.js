import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        width: 24,
        height: 24
    },
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: 'bold'
    },
    space: {
        width: 24
    }
})