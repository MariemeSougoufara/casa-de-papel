import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const EmailValidation = ({ navigation }) => {
  const [code, setCode] = useState('');

  const handleEmailValidation = () => {
    // Logique pour la validation du code
    console.log('Code:', code);

    // Redirection vers la page "PersonalScreen"
    navigation.navigate('PersonalScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.topBarText}>Casa De Papel</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Vous y êtes Presque !</Text>
        <Text style={styles.subtitle1}>Un code vous a été envoyé sur votre Email.</Text>
        <Text style={styles.subtitle2}>Veuillez le renseigner.</Text>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Code de validation"
          onChangeText={(text) => setCode(text)}
          value={code}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleEmailValidation}>
          <Text style={styles.buttonText}>Valider</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: 'black', 
    width: '100%',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  topBarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', 
    marginLeft: 10,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 150, 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  subtitle1: {
    fontSize: 18,
    color: 'black',
    marginTop: 40,
    marginBottom: 20,
  },
  subtitle2: {
    fontSize: 18,
    color: 'black',
    marginTop: 5,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: -320, 
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'black',
  },
  button: {
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },  
  text: {
    fontSize: 16,
    color: 'black',
  },
  errorMessage: {
    color: 'black',
    marginBottom: 10,
  },
});

export default EmailValidation;
