import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import {
  activeOutlineColor,
  componentBackgroundColor,
  containerBackgroundColor,
  textColor,
} from "../constants/styles";

export default function TabLayout() {
  return (
    <Drawer
      screenOptions={{
        drawerActiveTintColor: activeOutlineColor,
        headerStyle: {
          backgroundColor: containerBackgroundColor,
        },
        headerShadowVisible: false,
        headerTintColor: textColor,
        drawerInactiveTintColor: textColor,
        drawerStyle: {
          backgroundColor: componentBackgroundColor,
        },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          title: "Index",
          drawerIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="about"
        options={{
          title: "About",
          drawerIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="tasks"
        options={{
          title: "Tasks",
          drawerIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Drawer>
  );
}
