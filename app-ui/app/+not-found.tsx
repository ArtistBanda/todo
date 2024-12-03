import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! not found" }} />
      <View>
        <Text>Path not found</Text>
        <Link href="/" style={styles.button}>
          Go back to Home Screen!
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
