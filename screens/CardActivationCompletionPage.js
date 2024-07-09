import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardActivationCompletionPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Black banner */}
      <View style={styles.banner}>
        {/* Bank logo */}
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
        </View>
        {/* Banner text */}
        <View style={styles.textContainer}>
          <Text style={styles.bannerText}>Activation terminée</Text>
        </View>
      </View>

      {/* Title "Activation terminée" */}
      <Text style={styles.title}>Activation terminée</Text>

      {/* Image "securitecarte.png" */}
      <Image
        source={require('../assets/CarteActivee.png')}
        style={styles.image}
      />

      {/* Status of the card */}
      <Text style={styles.status}>
        Statut: <Text style={styles.statusText}>Activé</Text>
      </Text>

      {/* Red text */}
      <Text style={styles.redText}>
        Vous pouvez maintenant utiliser votre carte convenablement.
      </Text>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        {/* Action: Réinitialiser code secret */}
        <TouchableOpacity
          style={styles.action}
          onPress={() => navigation.navigate('ActivationStepsPage')}
        >
          <Image
            source={require('../assets/key.png')}
            style={styles.actionIcon}
          />
          <Text style={styles.actionText}>Réinitialiser code secret</Text>
        </TouchableOpacity>
      </View>

      {/* Bouton "Retour à l'accueil" */}
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.navigate('HomePage')}
      >
        <Text style={styles.homeButtonText}>Retour à l'accueil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0,
    paddingHorizontal: 0,
    backgroundColor: 'white',
  },
  banner: {
    backgroundColor: 'black',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  logoContainer: {
    marginRight: 'auto',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10,
  },
  statusText: {
    color: 'red',
  },
  redText: {
    fontSize: 16,
    color: 'black',
    marginBottom: 20,
  },
  actionsContainer: {
    width: '100%',
    alignItems: 'center',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '85%',
  },
  actionIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  actionText: {
    color: 'black',
    textAlign: 'center',
    flex: 1,
  },
  homeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  homeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CardActivationCompletionPage;
