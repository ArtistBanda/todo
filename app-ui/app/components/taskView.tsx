import { StyleSheet, View } from "react-native";
import {
  activeOutlineColor,
  componentBackgroundColor,
  containerBackgroundColor,
  defaultMargin,
  defaultMode,
  placeholderTextColor,
  textColor,
} from "../constants/styles";
import { List, TextInput } from "react-native-paper";

const placeholderTaskText: string = "Add Task ...";

export const TaskView = () => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.textInput}
          mode={defaultMode}
          textColor={textColor}
          outlineColor={componentBackgroundColor}
          activeOutlineColor={activeOutlineColor}
          placeholder={placeholderTaskText}
          placeholderTextColor={placeholderTextColor}
          dense={true}
        />
      </View>
      <View
        style={{
          flex: 2,
          margin: defaultMargin,
          marginTop: 0,
        }}
      >
        <List.Section style={{ margin: defaultMargin }}>
          <List.Item
            title="Text"
            titleStyle={styles.listTitleStyle}
            left={() => <List.Icon icon="arrow-right-thin" color={textColor} />}
          />
          <List.Item
            title="Text"
            titleStyle={styles.listTitleStyle}
            left={() => <List.Icon icon="arrow-right-thin" color={textColor} />}
          />
        </List.Section>
      </View>
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
    color: textColor,
  },
  listTitleStyle: {
    color: textColor,
  },
});
