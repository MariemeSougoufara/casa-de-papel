import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginUser } from '../services/userService';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // Message for success or failure

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [message]);
  const setToken = async (token) =>{
    try {
      await AsyncStorage.setItem(
        'token',token
      );

      await AsyncStorage.setItem(
        "email", email
      );
    } catch (error) {
      // Error saving data
    }
  }
  const handleSignIn = async () => {
    if (!validateEmail(email)) {
      setEmailValid(false);
      return;
    }

    setLoading(true); // Start loading spinner

    try {
      const loginRequest = {
        email: email,
        password: password,
      };

      const response = await loginUser(loginRequest); // Assuming loginUser returns a promise
      setLoading(false); // Stop loading spinner

      // Handle successful login
      if (response.token) {
        setMessage({ type: 'success', text: 'Connexion réussie' });
        setTimeout(() => {
          setMessage(null);
          setToken(response.token);
          navigation.navigate('HomePage');
        }, 2000); // Clear message after 2 seconds
      } else {
        setMessage({ type: 'error', text: 'Email ou mot de passe incorrect' });
      }
    } catch (error) {
      setLoading(false); // Stop loading spinner on error
      setMessage({ type: 'error', text: 'Email ou mot de passe incorrect' });
    }
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
        {loading && <ActivityIndicator size="large" color="red" paddingHorizontal="12"/>}
        {message && (
          <View style={[styles.messageContainer, { backgroundColor: message.type === 'success' ? 'green' : 'red' }]}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        )}
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
  messageContainer: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    right: 20,
  },
  messageText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default SignIn;
