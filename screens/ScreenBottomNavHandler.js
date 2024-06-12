import React from "react";
import HomePage from "./HomePage";
import DetailTransaction from "./detailTransaction";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity, Text } from "react-native";


const Tab = createBottomTabNavigator();

const ScreenBottomNavHandler = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {    
                        iconName = focused  ? 'home' : 'home-outline';
                        color = "black"
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'account' : 'account-outline';
                        color = "black"
                    } else if (route.name === 'Settings') {
                        iconName = focused ? 'account' : 'account-outline';
                        color = "black"
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
        <Tab.Screen name="Profile" component={DetailTransaction} />
        <Tab.Screen name="Home" component={HomePage} />
            <Tab.Screen name="Settings" component={HomePage} />
        </Tab.Navigator>    
    )
}

export default ScreenBottomNavHandler;