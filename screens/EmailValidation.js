import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

<<<<<<< HEAD
const EmailValidation = ({ navigation }) => {
  const [code, setCode] = useState('');

  const handleEmailValidation = () => {

    // Redirection vers la page "PersonalScreen"
    navigation.navigate('PersonalScreen');
=======
const EmailValidation = ({ navigation, route }) => {
  const [code, setCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { validationCode } = route.params;

  const handleEmailValidation = () => {
    if (code === validationCode.toString()) {
      // Redirection vers la page "PersonalScreen"
      navigation.navigate('PersonalScreen');
    } else {
      setErrorMessage('Code de validation incorrect. Veuillez réessayer.');
    }
>>>>>>> ddba7b7 (envoie de mail, integration de l'api)
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.topBarText}>Casa De Papel</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Vous y êtes Presque !</Text>
<<<<<<< HEAD
        <Text style={styles.subtitle1}>Un code vous a été envoyé sur votre Email.</Text>
        <Text style={styles.subtitle2}>Veuillez le renseigner.</Text>
=======
        <Text style={styles.subtitle1}>Un code vous a été envoyé sur votre Email. Veuillez le renseigner</Text>
>>>>>>> ddba7b7 (envoie de mail, integration de l'api)
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Code de validation"
          onChangeText={(text) => setCode(text)}
          value={code}
          keyboardType="numeric"
        />
<<<<<<< HEAD
=======
        {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
>>>>>>> ddba7b7 (envoie de mail, integration de l'api)
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
<<<<<<< HEAD
    backgroundColor: 'black', 
=======
    backgroundColor: 'black',
>>>>>>> ddba7b7 (envoie de mail, integration de l'api)
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
<<<<<<< HEAD
    color: 'white', 
=======
    color: 'white',
>>>>>>> ddba7b7 (envoie de mail, integration de l'api)
    marginLeft: 10,
  },
  headerContainer: {
    alignItems: 'center',
<<<<<<< HEAD
    marginTop: 150, 
=======
    marginTop: 150,
>>>>>>> ddba7b7 (envoie de mail, integration de l'api)
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
<<<<<<< HEAD
=======
    padding: 10,
    textAlign: 'center',
>>>>>>> ddba7b7 (envoie de mail, integration de l'api)
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
<<<<<<< HEAD
    marginTop: -320, 
=======
    marginTop: -320,
>>>>>>> ddba7b7 (envoie de mail, integration de l'api)
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
<<<<<<< HEAD
  },  
=======
  },
>>>>>>> ddba7b7 (envoie de mail, integration de l'api)
  text: {
    fontSize: 16,
    color: 'black',
  },
  errorMessage: {
<<<<<<< HEAD
    color: 'black',
    marginBottom: 10,
=======
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
>>>>>>> ddba7b7 (envoie de mail, integration de l'api)
  },
});

export default EmailValidation;
