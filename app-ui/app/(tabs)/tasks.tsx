import { StyleSheet, View } from "react-native";
import { Input } from "react-native-magnus";

export default function Tasks() {
  return (
    <View>
      <Input style={styles.inputField} placeholder="Add Task!" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "row",
    margin: 10,
  },
});
