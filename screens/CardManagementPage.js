import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardManagementPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Bannière noire */}
      <View style={styles.banner}>
        {/* Logo de la banque */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.logo}
          />
        </View>
        {/* Texte "Gestion carte bancaire" */}
        <View style={styles.textContainer}>
          <Text style={styles.bannerText}>Gestion carte bancaire</Text>
        </View>
      </View>

      {/* Titre "Gérer ma carte" */}
      <Text style={styles.title}>Gérer ma carte</Text>

      {/* Image "securitecarte.png" */}
      <Image
        source={require('../assets/securitecarte.png')}
        style={styles.image}
      />

      {/* Statut de la carte */}
      <Text style={styles.status}>Statut: <Text style={styles.statusText}>Activé</Text></Text>

      {/* Texte rouge */}
      <Text style={styles.redText}>Il ne reste plus qu'à récupérer votre code secret.</Text>

      {/* Actions */}
      <View style={styles.actionsContainer}>
        {/* Action: Demande du code secret */}
        <TouchableOpacity
          style={styles.action}
          onPress={() => navigation.navigate('ActivationStepsPage')}
        >
          <Image
            source={require('../assets/key.png')}
            style={styles.actionIcon}
          />
          <Text style={styles.actionText}>Demande du code secret</Text>
        </TouchableOpacity>

        {/* Action: Bloquer temporairement */}
        <View style={styles.action}>
          <Image
            source={require('../assets/lock.png')}
            style={styles.actionIcon}
          />
          <Text style={styles.actionText}>Bloquer temporairement</Text>
        </View>

        {/* Action: Débloquer */}
        <View style={styles.action}>
          <Image
            source={require('../assets/unlock.png')}
            style={styles.actionIcon}
          />
          <Text style={styles.actionText}>Débloquer</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 0, // Supprimer l'espace en haut de la vue
    paddingHorizontal: 0, // Supprimer les marges horizontales
    backgroundColor: 'white',
  },
  banner: {
    backgroundColor: 'black',
    width: '100%', // Occupe toute la largeur de l'écran
    flexDirection: 'row', // Pour aligner le logo et le texte horizontalement
    justifyContent: 'center', // Centrer les éléments horizontalement
    alignItems: 'center', // Centrer les éléments verticalement
    paddingVertical: 10,
    paddingHorizontal: 20, // Ajouter des marges horizontales à la bannière
    marginBottom: 30, // Ajouter un espacement sous la bannière
  },
  logoContainer: {
    marginRight: 'auto', // Déplacer le logo tout à gauche
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
    color: '#007BFF', // Bleu
    marginBottom: 20,
  },
  image: {
    width: 300, // Largeur augmentée
    height: 300, // Hauteur augmentée
    marginBottom: 20,
  },
  status: {
    fontSize: 16,
    color: 'black',
    marginBottom: 10, // Réduire l'espace en bas
  },
  statusText: {
    color: '#007BFF', // Bleu
  },
  redText: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20, // Ajouter un espacement en bas
  },
  actionsContainer: {
    width: '100%',
    alignItems: 'center', // Centrer les bannières horizontalement
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#007BFF', // Bleu
    borderRadius: 5,
    padding: 10,
    marginBottom: 15, // Augmentation de l'espace entre les bannières
    width: '85%', // Largeur augmentée
  },
  actionIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  actionText: {
    color: '#007BFF', // Bleu
    textAlign: 'center',
    flex: 1, // Pour que le texte prenne l'espace restant
  },
});

export default CardManagementPage;
