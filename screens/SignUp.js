import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = () => {
    if (!validateEmail(email)) {
      setEmailValid(false);
      return;
    }
    if (password.length < 8) {
      setPasswordValid(false);
      return;
    }
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    // Logique pour la connexion de l'utilisateur
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    
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
        <Text style={styles.title}>Bienvenue dans la Famille !</Text>
        <Text style={styles.subtitle}>Inscrivez-vous.</Text>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={[styles.input, !emailValid && styles.inputError]}
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
            setEmailValid(true);
          }}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {!emailValid && <Text style={styles.errorMessage}>Email invalide</Text>}
        <TextInput
          style={[styles.input, !passwordValid && styles.inputError]}
          placeholder="Mot De Passe"
          onChangeText={(text) => {
            setPassword(text);
            setPasswordValid(true);
          }}
          value={password}
          secureTextEntry
        />
        {!passwordValid && <Text style={styles.errorMessage}>Le mot de passe doit contenir au moins 8 caractères</Text>}
        <TextInput
          style={[styles.input, !passwordsMatch && styles.inputError]}
          placeholder="Confirmer Mot De Passe"
          onChangeText={(text) => {
            setConfirmPassword(text);
            setPasswordsMatch(text === password);
          }}
          value={confirmPassword}
          secureTextEntry
        />
        {!passwordsMatch && <Text style={styles.errorMessage}>Mots de Passe Différents</Text>}
        <TouchableOpacity style={styles.button} onPress={(handleSignUp) => navigation.navigate('EmailValidation')}>
          <Text style={styles.buttonText}>Suivant</Text>
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
    color: 'black',
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: -260, 
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
  text: {
    fontSize: 16,
    color: 'black',
  },
  signUpText: {
    marginLeft: 5,
    color: 'red',
  },
  errorMessage: {
    color: 'black',
    marginBottom: 10,
  },
});

export default SignUp;
