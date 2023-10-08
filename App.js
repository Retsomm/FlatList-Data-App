import { StyleSheet, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import HomeDetailScreen from "./src/screens/HomeDetailScreen";
import ProfileDetailScreen from "./src/screens/ProfileDetailScreen";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Mars"
      screenOptions={{
        headerStyle: { backgroundColor: "tomato" },
        headerBackTitle: "back",
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Mars" component={HomeScreen} />
      <Stack.Screen
        name="MarsDetail"
        component={HomeDetailScreen}
        options={{ headerTitle: "My Mars" }}
      />
    </Stack.Navigator>
  );
}
function MyProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Earth"
      screenOptions={{
        headerStyle: { backgroundColor: "lightblue" },
        headerBackTitle: "back",
        headerTintColor: "white",
      }}
    >
      <Stack.Screen name="Earth" component={ProfileScreen} />
      <Stack.Screen
        name="EarthDetail"
        component={ProfileDetailScreen}
        options={{ headerTitle: "My Earth" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="|Mars|"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, focused }) => {
            let iconName;
            if (route.name == "|Mars|") {
              // iconName = focused
              //   ? require("./src/img/Mars.svg")
              //   : "ios-information-circle-outline";
              return (
                <Image
                  source={{ uri: "https://freesvg.org/img/Mars.png" }}
                  style={{ width: 30, height: 30 }}
                />
              );
            } else if (route.name == "|Earth|") {
              // iconName = focused ? "ios-options" : "ios-list";
              return (
                <Image
                  source={{
                    uri: "https://freesvg.org/img/The-Earth-Seen-From-Apollo-17-by-Merlin2525.png",
                  }}
                  style={{ width: 30, height: 30 }}
                />
              );
            }
            return <Ionicons name={iconName} size={25} color={color} />;
          },
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen name="|Mars|" component={MyHomeStack} />
        <Tab.Screen name="|Earth|" component={MyProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
