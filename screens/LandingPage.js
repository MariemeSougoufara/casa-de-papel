import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.topBarText}>Casa De Papel</Text>
      </View>
      <Text style={styles.title1}>Entrez dans l'univers</Text>
      <Text style={styles.title2}>Casa De Papel</Text>
      <Text style={styles.subtitle1}>
        Rejoignez Casa De Papel et activez votre liberté financière directement depuis votre poche.
      </Text>
      <Text style={styles.subtitle2}>
        Gérez toutes vos finances en un seul endroit, sûr et sécurisé en un rien de temps.
      </Text>
      <Image source={require('../assets/credit-card.png')} style={styles.cardImage} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Suivant</Text>
        <Ionicons name="arrow-forward" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 90, 
  },
  topBar: {
    // position: 'absolute',
    // top: 0,
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
  title1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 50, 
    marginBottom: 10,
  },
  title2: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FF0000',
    textAlign: 'center',
    marginTop: 10, 
    marginBottom: 30,
  },
  subtitle1: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  subtitle2: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  cardImage: {
    width: '80%',
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold'
  },
});

export default LandingPage;
