import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignIn = () => {
    if (!validateEmail(email)) {
      setEmailValid(false);
      return;
    }
<<<<<<< HEAD

    // Redirection vers la page "HomeScreen"
    navigation.navigate('HomeScreen');
=======
    // Redirection vers la page "HomeScreen"
    navigation.navigate('HomePage');
>>>>>>> ddba7b7 (envoie de mail, integration de l'api)
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.topBarText}>Casa De Papel</Text>
      </View>
      <View style={styles.headerContainer}>
      <Image source={require('../assets/happyImage.png')} style={styles.happyImage} />
      <View>
        <Text style={styles.title}>Content de vous revoir !</Text>
        <Text style={styles.subtitle}>Connectez-vous.</Text>
        </View>
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
          secureTextEntry={true}
        />
        {!passwordValid && <Text style={styles.errorMessage}>Mot de passe invalide</Text>}
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Connexion</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.text}>Nouveau sur Casa De Papel ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={[styles.text, styles.signUpText]}>Créer un compte</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}>
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
    color: 'white', 
    marginLeft: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 150, 
  },
  happyImage: {
    width: 50,
    height: 50,
    marginRight: 40,
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
    marginTop: -240, 
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

export default SignIn;
