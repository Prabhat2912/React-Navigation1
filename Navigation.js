import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  useNavigation,
} from "@react-navigation/native";
import Feed from "./screens/tabScreens/Feed";
import Notification from "./screens/tabScreens/Notification";
import Settings from "./screens/tabScreens/Settings";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TweetDetailScreen from "./screens/homeStack/TweetDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Payments from "./screens/drawerScreens/Payments";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image, Pressable, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";

const TopTabs = createMaterialTopTabNavigator();

const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "#1DA1F2",
        },
      }}
    >
      <TopTabs.Screen name="main" component={Feed} />
      <TopTabs.Screen name="Following" component={Payments} />
      <TopTabs.Screen name="👀" component={Payments} />
    </TopTabs.Navigator>
  );
}

function DrawerGroup() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="HomeStack" component={HomeStackGroup} />
      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{ headerShown: true }}
      />
    </Drawer.Navigator>
  );
}

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="TweetDetailScreen"
        component={TweetDetailScreen}
        options={{
          presentation: "fullScreenModal",
        }}
      />
    </HomeStack.Navigator>
  );
}

function TabGroup() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Feed") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Notification") {
            iconName = focused ? "notifications" : "notifications-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1DA1F2",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Feed"
        component={TopTabsGroup}
        options={{
          tabBarLabel: "Home",
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("./assets/beto.jpeg")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  const currentTheme = useColorScheme();

  return (
    <NavigationContainer
      theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <StatusBar style="auto" />
      <DrawerGroup />
      {/* <HomeStackGroup /> */}
    </NavigationContainer>
  );
}
