import { Button, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Main({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#0d9f61",
      }}
    >
      <Tab.Screen
        name="Home"
        component={() => {
          return (
            <View>
              <Text>Home Screen</Text>
              <Button
                onPress={() => {
                  navigation.navigate("Settings");
                }}
                title="Go to settings"
              />
            </View>
          );
        }}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="OtherPage"
        component={() => {
          return <Text>Other Screen</Text>;
        }}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function Settings() {
  return <Text style={styles.container}>You got to the settings page</Text>;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
