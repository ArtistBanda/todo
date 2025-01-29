import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TaskView } from "../components/taskView";

export default function Index() {
  return (
    <>
      <View style={styles.container}>
        {/* <Text style={styles.text}>Home Screen</Text>
        <Link href={"/about"}>About Page</Link> */}
        <TaskView></TaskView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
