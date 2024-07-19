// VerificationPage.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

// Importer les images depuis le dossier assets
import IDCardImage from '../assets/IDCard.jpg';
import SelfieImage from '../assets/selfie.png';
import ProofOfAddressImage from '../assets/domicile.png';

const VerificationPage = () => {
  const [idCopy, setIdCopy] = useState(null);
  const [selfie, setSelfie] = useState(null);
  const [proofOfAddress, setProofOfAddress] = useState(null);
  const navigation = useNavigation();

  const handleImagePick = async (setImage) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleContinue = () => {
    // Naviguer directement vers la page de succès de la vérification d'identité
    navigation.navigate('IdentityVerificationSuccess');
  };

  return (
    <View style={styles.container}>
      {/* Bannière avec logo */}
      <View style={styles.bannerContainer}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.bannerText}>Vérification d’identité</Text>
      </View>
      {/* Texte */}
      <View style={styles.inputContainer}>
        <Text style={styles.infoText}>
          Pour des raisons de sécurité, nous devons vérifier votre identité.
        </Text>
        <Text style={styles.infoText}>
          Veuillez remplir les champs suivants :
        </Text>
        <TouchableOpacity onPress={() => handleImagePick(setIdCopy)} style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>
            Télécharger une copie de votre pièce d'identité
          </Text>
          <Image source={IDCardImage} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePick(setSelfie)} style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>
            Prendre un selfie
          </Text>
          <Image source={SelfieImage} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleImagePick(setProofOfAddress)} style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>
            Télécharger un justificatif de domicile
          </Text>
          <Image source={ProofOfAddressImage} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Button title="Continuer" onPress={handleContinue} color="#007BFF" />
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
  bannerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '100%', // La bannière occupe toute la largeur
  },
  logo: {
    width: 40, // Ajuste la largeur du logo selon tes préférences
    height: 40, // Ajuste la hauteur du logo selon tes préférences
    marginLeft: 20, // Espacement entre le logo et le texte
  },
  bannerText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10, // Espacement entre le logo et le texte
    fontWeight: 'bold', // Épaissit le texte
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 20,
    paddingHorizontal: 26, // Ajout du padding horizontal pour centrer le contenu
  },
  infoText: {
    fontSize: 18, // Augmente la taille de la police
    fontWeight: 'bold', // Met en gras
    marginBottom: 20, // Espacement entre le texte et les champs
  },
  uploadButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginBottom: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  uploadButtonText: {
    flex: 1,
    color: '#007BFF',
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default VerificationPage;