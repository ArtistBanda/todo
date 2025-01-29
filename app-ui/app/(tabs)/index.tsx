import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TaskView } from "../components/taskView";

export default function Index() {
  return (
    <>
      <TaskView />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
