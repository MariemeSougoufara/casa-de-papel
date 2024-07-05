import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importez useNavigation

const ActivationConfirmationPage = () => {
  const navigation = useNavigation(); // Obtenez l'objet de navigation

  const handleFinish = () => {
    navigation.navigate('CardManagementPage'); // Naviguez vers CardManagementPage
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
        {/* Texte "Activation carte bancaire" */}
        <Text style={styles.bannerText}>Activation carte bancaire</Text>
      </View>

      {/* Contenu de la page */}
      <View style={styles.content}>
        <Image
          source={require('../assets/activationcarte2.webp')}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={styles.boldText}>C'est fait !</Text>
        <Text>Votre carte est maintenant activée.</Text>
        <TouchableOpacity style={styles.button} onPress={handleFinish}>
          <Text style={styles.buttonText}>Terminer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Aligne les éléments en haut de l'écran
    alignItems: 'center',
  },
  banner: {
    backgroundColor: 'black',
    width: '100%', // Occupe toute la largeur de l'écran
    flexDirection: 'row', // Pour aligner le logo et le texte horizontalement
    justifyContent: 'flex-start', // Aligne les éléments à gauche
    alignItems: 'center', // Centre les éléments verticalement
    paddingVertical: 10,
    paddingHorizontal: 20, // Marge intérieure pour espacer le texte du bord de la bannière
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10, // Marge à droite du logo pour l'éloigner du texte
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Marge entre la bannière et le contenu de la page
  },
  image: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').width * 0.8,
    marginBottom: 20,
  },
  boldText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ActivationConfirmationPage;
