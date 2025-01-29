import { StyleSheet, View } from "react-native";
import {
  activeOutlineColor,
  componentBackgroundColor,
  containerBackgroundColor,
  defaultMargin,
  defaultMode,
  placeholderTextColor,
} from "../constants/styles";
import { TextInput } from "react-native-paper";

const placeholderTaskText: string = "Add Tasks ...";

export const TaskView = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        mode={defaultMode}
        outlineColor={componentBackgroundColor}
        activeOutlineColor={activeOutlineColor}
        placeholder={placeholderTaskText}
        placeholderTextColor={placeholderTextColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: containerBackgroundColor,
    flex: 1,
  },
  textInput: {
    backgroundColor: componentBackgroundColor,
    margin: defaultMargin,
  },
});
