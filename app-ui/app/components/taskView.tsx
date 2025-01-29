import { StyleSheet, View } from "react-native"
import { Input } from "react-native-magnus"
import { backgroundColor } from "../constants/styles"

export const TaskView = () => {
    return (
        <View style={styles.container}>
            <View>
                <Input style={styles.inputField}></Input>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: backgroundColor,
        flex: 1,
        flexDirection: "column",
        width: "100%"
    },
    inputField: {
        flexDirection: "row",
        alignItems: "flex-start",
        margin: 10,
        backgroundColor: '25292e'
    },
    text: {
        color: "#fff",
    }
})