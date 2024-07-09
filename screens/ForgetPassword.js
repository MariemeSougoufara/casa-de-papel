import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ForgetPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [emailValid, setEmailValid] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEmailValidation = () => {
    if (!validateEmail(email)) {
      setEmailValid(false);
      return;
    }
    
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.topBarText}>Casa De Papel</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title1}>Mot de Passe oublié ?</Text>
        <Text style={styles.title2}>Pas de Panique !</Text>
        <Text style={styles.subtitle1}>Veuillez renseigner votre Email et un code vous sera envoyé pour récupérer votre mot de passe.</Text>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={[styles.input, !emailValid && styles.inputError]}
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
            setEmailValid(text); 
          }}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {!emailValid && <Text style={styles.errorText}>Email invalide</Text>}
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
    marginTop: 100,
    paddingHorizontal: 20, 
  },
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 10,
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
    marginTop: -10,
    marginBottom: 20,
  },
  subtitle3: {
    fontSize: 18,
    color: 'black',
    marginTop: -12,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: -250, 
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
  inputError: {
    borderColor: 'red',
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
  errorText: {
    color: 'black',
    marginBottom: 10,
  },
  successText: {
    color: 'green',
    marginTop: 5,
  },
});

export default ForgetPassword;
