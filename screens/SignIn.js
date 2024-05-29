import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSignIn = () => {
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    // Logique pour la connexion de l'utilisateur
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Redirection ou autre action après connexion
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.topBarText}>Casa De Papel</Text>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Content de vous revoir !</Text>
        <Text style={styles.subtitle}>Connectez-vous.</Text>
      </View>
      <View style={styles.contentContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Mot De Passe"
          onChangeText={setPassword}
          value={password}
          secureTextEntry
        />
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
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.text}>Nouveau sur Casa De Papel ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
            <Text style={[styles.text, styles.signUpText]}>Créer un compte</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPasswordScreen')}>
            <Text style={[styles.text, styles.signUpText]}>Mot de Passe oublié ?</Text>
          </TouchableOpacity>
        </View>
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
    color: 'white', // Change this to any color you prefer
    marginLeft: 10,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: 150, // Espace ajouté pour descendre les phrases
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 18,
    color: 'black',
    marginBottom: 20,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: -150, // Ajustement de la position de la boîte de sign in
  },
  input: {
    height: 50,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20, // Espace ajouté entre les champs de saisie
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
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
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

export default SignInScreen;
