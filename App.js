import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingPage from './screens/LandingPage';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import EmailValidation from './screens/EmailValidation';
import ForgetPassword from './screens/ForgetPassword';
import PersonalInfo from './screens/PersonalInfo';
import HomePage from './screens/HomePage';
import DetailTransaction from './screens/detailTransaction';
import ScreenBottomNavHandler from './screens/ScreenBottomNavHandler';

const Stack =  createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
    name="SignUp"
    component={SignUp}
  />
    <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
      name="EmailValidation"
      component={EmailValidation}  
      /> 
    <Stack.Screen
          name="PersonalScreen"
          component={PersonalInfo}
        />
    <Stack.Screen
        name="HomePage"
        component={ScreenBottomNavHandler}
        options={{ headerShown: false }}
      /> 
      
      <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: true}}
        />
       
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
        /> 
    
        
        <Stack.Screen
          name='DetailTransaction'
          component={DetailTransaction}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
