// screens/IdentityVerificationSuccessPage.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const IdentityVerificationSuccessPage = () => {
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
          source={require('../assets/okay.png')} /* Correction de l'extension de l'image */
          style={styles.image}
        />
        <Text style={styles.message}>Votre identité a été vérifiée avec succès</Text>
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
    backgroundColor: 'black', // Changement de la couleur de la bannière en noir
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
    marginTop: -5, // Ajustement de la marge vers le haut
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
});

export default IdentityVerificationSuccessPage;