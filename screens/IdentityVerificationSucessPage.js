import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IdentityVerificationSuccessPage = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('SignIn'); 
  };

  return (
    <View style={styles.container}>
      {/* Bannière avec le logo */}
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.bannerText}>Etat de la vérification d'identité</Text>
      </View>

      {/* Contenu de la page */}
      <View style={styles.contentContainer}>
        <Image
          source={require('../assets/okay.png')}
          style={styles.image}
        />
        <Text style={styles.message}>Votre identité a été vérifiée avec succès</Text>
        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={styles.buttonText}>Se connecter</Text>
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
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  bannerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  message: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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

export default IdentityVerificationSuccessPage;
