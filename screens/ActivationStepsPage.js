import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ActivationStepsPage = () => {
  const navigation = useNavigation();

  const handleGoToSecurityCodePage = () => {
    navigation.navigate('SecurityCodePage');
  };

  return (
    <View style={styles.container}>
      {/* Bannière noire */}
      <View style={styles.banner}>
        {/* Logo de la banque */}
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        {/* Texte "Demande du code secret" */}
        <Text style={styles.bannerText}>Demande du code secret</Text>
      </View>

      <Image
        source={require('../assets/activationcarte1.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Pour recevoir votre code secret</Text>
      <Text style={styles.step}>1. Un SMS vous sera envoyé.</Text>
      <Text style={styles.step}>2. Répondez au SMS avec le code de sécurité qui sera affiché à l'étape suivante.</Text>
      <Text style={styles.step}>3. Le code secret de votre carte vous sera alors envoyé par SMS.</Text>
      
      {/* Bouton "C'est parti!" */}
      <TouchableOpacity style={styles.button} onPress={handleGoToSecurityCodePage}>
        <Text style={styles.buttonText}>C'est parti!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  banner: {
    backgroundColor: 'black',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    position: 'absolute', // S'assurer que la bannière est en haut
    top: 0,
    left: 0,
    right: 0,
  },
  logo: {
    width: 40,
    height: 40,
    position: 'absolute',
    left: 20,
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 350,
    height: 300,
    marginTop: 120, // Augmenter l'espace entre la bannière et le contenu
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 20,
    textAlign: 'center',
  },
  step: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20, // Ajouter un espace au-dessus du bouton
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ActivationStepsPage;
