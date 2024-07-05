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
import AccountScreen from './screens/AccountScreen';
import CardActivationPagebis from './screens/CardActivationPagebis';
import CardNumberEntryPage from './screens/CardNumberEntryPage';
import ActivationConfirmationPage from './screens/ActivationConfirmationPage';
import CardManagementPage from './screens/CardManagementPage';
import ActivationStepsPage from './screens/ActivationStepsPage';
import SecurityCodePage from './screens/SecurityCodePage';
import CardActivationCompletionPage from './screens/CardActivationCompletionPage'; 

import IdentityVerificationSuccessPage from './screens/IdentityVerificationSucessPage';
import VerificationPage from './screens/VerificationPage';
import AllOperationPage from './screens/AllOperationsPage';
import Plafond from './screens/Plafond';
import Virement from './screens/Virement';

const Stack =  createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{ headerShown: false }}
        />

   
    <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
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
    name="SignUp"
    component={SignUp}
    
  />
    
        <Stack.Screen
      name="EmailValidation"
      component={EmailValidation}  
      /> 
      <Stack.Screen  
        name="IdentityVerificationSuccess"
        component={IdentityVerificationSuccessPage}
      />

      <Stack.Screen 
        name="VerificationPage"
        component={VerificationPage}
      />
    
      <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ headerShown: true}}
        />
      <Stack.Screen 
        name="VirementScreen"
        component={Virement}
      />
       
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
        />
        
        <Stack.Screen
          name='DetailTransaction'
          component={DetailTransaction}
        />
        <Stack.Screen
          name="CardActivationPagebis"
          component={CardActivationPagebis}
          options={{ title: 'Activation de la Carte' }}
        />
        <Stack.Screen
          name="CardNumberEntryPage"
          component={CardNumberEntryPage}
          options={{ title: 'Saisie du numéro de carte' }}
        />
        <Stack.Screen
          name="ActivationConfirmationPage"
          component={ActivationConfirmationPage}
          options={{ title: 'Confirmation d\'activation' }}
        />
        <Stack.Screen
          name="CardManagementPage"
          component={CardManagementPage}
          options={{ title: 'Gérer ma carte' }}
        />
        <Stack.Screen
          name="ActivationStepsPage"
          component={ActivationStepsPage}
          options={{ title: 'Étapes d\'activation' }}
        />
        <Stack.Screen
          name="SecurityCodePage"
          component={SecurityCodePage}
          options={{ title: 'Code de sécurité' }}
        />
        <Stack.Screen
          name="CardActivationCompletionPage"
          component={CardActivationCompletionPage}
          options={{ title: 'Activation terminée' }}
        />
        <Stack.Screen
          name='allOperations'
          title="Operations"
          component={AllOperationPage}
        />
        <Stack.Screen 
          name="Plafond"
          component={Plafond}
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
