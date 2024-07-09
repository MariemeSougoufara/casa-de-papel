import React from "react";
import HomePage from "./HomePage";
import ProfileScreen from "./Profile";
import SettingsScreen from "./Settings";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();

const ScreenBottomNavHandler = () => {
  return (
    <Tab.Navigator
      initialRouteName="Accueil"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Accueil') {
            iconName = focused ? 'home' : 'home-outline';
            color = "black";
          } else if (route.name === 'Profil') {
            iconName = focused ? 'account' : 'account-outline';
            color = "black";
          } else if (route.name === 'Paramètres') {
            iconName = focused ? 'cog' : 'cog-outline';
            color = "black";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'grey',
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Icon name="logout" size={20} color="red" />
          </TouchableOpacity>
        ),
      })}
    >
      <Tab.Screen name="Profil" component={ProfileScreen} />
      <Tab.Screen name="Accueil" component={HomePage} />
      <Tab.Screen name="Paramètres" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default ScreenBottomNavHandler;
