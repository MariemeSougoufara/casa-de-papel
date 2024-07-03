// SettingsScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import tw from 'twrnc';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SettingsScreen = ({ navigation }) => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = React.useState(false);
  const [isDarkThemeEnabled, setIsDarkThemeEnabled] = React.useState(false);

  const toggleNotifications = () => {
    setIsNotificationsEnabled(previousState => !previousState);
  };

  const toggleTheme = () => {
    setIsDarkThemeEnabled(previousState => !previousState);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <View style={tw`p-5`}>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Profile')}>
          <View style={tw`flex-row items-center`}>
            <MaterialCommunityIcons name="account" size={24} color="black" />
            <Text style={tw`ml-3 text-black`}>Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={toggleNotifications}>
          <View style={tw`flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
              <MaterialCommunityIcons name="bell" size={24} color="black" />
              <Text style={tw`ml-3 text-black`}>Notifications</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isNotificationsEnabled ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleNotifications}
              value={isNotificationsEnabled}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={toggleTheme}>
          <View style={tw`flex-row items-center justify-between`}>
            <View style={tw`flex-row items-center`}>
              <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" />
              <Text style={tw`ml-3 text-black`}>Dark Theme</Text>
            </View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isDarkThemeEnabled ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleTheme}
              value={isDarkThemeEnabled}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('LanguageSettings')}>
          <View style={tw`flex-row items-center`}>
            <MaterialCommunityIcons name="earth" size={24} color="black" />
            <Text style={tw`ml-3 text-black`}>Language</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('AppInfo')}>
          <View style={tw`flex-row items-center`}>
            <MaterialCommunityIcons name="information" size={24} color="black" />
            <Text style={tw`ml-3 text-black`}>About App</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} onPress={() => {navigation.navigate("SignIn") }}>
          <View style={tw`flex-row items-center`}>
            <MaterialCommunityIcons name="logout" size={24} color="black" />
            <Text style={tw`ml-3 text-black`}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  option: {
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SettingsScreen;
