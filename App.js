import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardActivationPagebis from './screens/CardActivationPagebis';
import CardNumberEntryPage from './screens/CardNumberEntryPage';
import ActivationConfirmationPage from './screens/ActivationConfirmationPage';
import CardManagementPage from './screens/CardManagementPage';
import ActivationStepsPage from './screens/ActivationStepsPage';
import SecurityCodePage from './screens/SecurityCodePage';
import CardActivationCompletionPage from './screens/CardActivationCompletionPage'; // Assurez-vous que ce chemin est correct

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
