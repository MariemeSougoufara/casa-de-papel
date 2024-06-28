import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, Clipboard, TextInput, Button } from 'react-native';
import logo from '../assets/logo.png'; // Importer l'image du logo
import { useNavigation } from '@react-navigation/native';

const SecurityCodePage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [fullMessage, setFullMessage] = useState(false);
  const [messageToSend, setMessageToSend] = useState('');
  const navigation = useNavigation();

  const copySecurityCode = () => {
    const securityCode = 'AZ92C6G4';
    Clipboard.setString(securityCode);
    Alert.alert('Code copié !');
  };

  const handlePressMessage = async () => {
    setFullMessage(true);
    const copiedText = await Clipboard.getString();
    setMessageToSend(copiedText);
  };

  const sendMessage = () => {
    Alert.alert('Message envoyé :', messageToSend);
    setShowMessage(false);
    setTimeout(() => {
      setShowMessage(true); // Afficher le deuxième message après 2 secondes
    }, 2000);
  };

  const continueToCompletionPage = () => {
    navigation.navigate('CardActivationCompletionPage');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      {/* Bannière noire au-dessus de l'image */}
      <View style={styles.banner}>
        {/* Logo de la banque */}
        <Image source={logo} style={styles.logo} />
        {/* Texte de la bannière */}
        <View>
          <Text style={styles.bannerText}>Demande du code secret</Text>
        </View>
      </View>

      {/* Message déroulant */}
      {showMessage && (
        <TouchableOpacity onPress={handlePressMessage} style={styles.messageBanner}>
          <View style={styles.messageHeader}>
            <Image source={require('../assets/messageicon.webp')} style={styles.messageIcon} />
            <View style={styles.messageHeaderText}>
              <Text style={styles.sender}>MESSAGES</Text>
              <Text style={styles.timestamp}>maintenant</Text>
            </View>
          </View>
          <Text style={styles.casadePapel}>CasaDePapel</Text>
          <Text style={styles.messageText}>
            {fullMessage
              ? 'Le code secret de votre carte est 5371. Mémorisez le et supprimez ce SMS. Par sécurité, il sera effacé dans 24h. Casa De Papel'
              : 'Bonjour, pour recevoir le code secret de votre carte, répondez à ce SMS avec le code affiché sur votre es...'}
          </Text>
        </TouchableOpacity>
      )}

      {/* Image "activationcarte1.jpg" */}
      <Image
        source={require('../assets/activationcarte1.jpg')}
        style={styles.image}
      />

      {/* Message "Code de sécurité à renvoyer" */}
      <Text style={styles.blueText}>Code de sécurité à renvoyer</Text>

      {/* Texte "Répondez au SMS en copiant le code ci-dessous : " */}
      <Text style={styles.blackText}>Répondez au SMS en copiant le code ci-dessous :</Text>

      {/* Bannière bleue claire avec le code de sécurité */}
      <View style={styles.securityCodeBanner}>
        {/* Code de sécurité */}
        <Text style={styles.securityCode}>AZ92C6G4</Text>

        {/* Image "copy.png" pour copier le code */}
        <TouchableOpacity onPress={copySecurityCode}>
          <Image
            source={require('../assets/copy.png')}
            style={styles.copyImage}
          />
        </TouchableOpacity>
      </View>

      {/* Champ de texte pour coller le message copié */}
      {fullMessage && (
        <View style={styles.replyContainer}>
          <TextInput
            style={styles.input}
            value={messageToSend}
            onChangeText={setMessageToSend}
            placeholder="Coller le code ici"
          />
          <Button title="Envoyer" onPress={sendMessage} />
        </View>
      )}

      {/* Bouton "Continuer" */}
      {showMessage && (
        <TouchableOpacity style={styles.continueButton} onPress={continueToCompletionPage}>
          <Text style={styles.continueButtonText}>Continuer</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', // Centrer verticalement
    backgroundColor: 'white',
    padding: 20,
  },
  banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'row', // Aligner le logo et le texte horizontalement
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 50, // Espace entre le logo et le texte (réduit à 50)
  },
  logo: {
    width: 40, // Taille du logo, ajustez selon vos besoins
    height: 40, // Taille du logo, ajustez selon vos besoins
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 30,
  },
  blueText: {
    color: '#007BFF',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
  blackText: {
    color: 'black',
    marginBottom: 20,
  },
  securityCodeBanner: {
    backgroundColor: '#EAF0F9', // Couleur bleue claire
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Centrer horizontalement
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  securityCode: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  copyImage: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  messageBanner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#EFEFF0', // Gris clair
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 0, // Espacement par rapport au haut de l'écran
    borderRadius: 5,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // Alignement vertical
    marginBottom: 5,
  },
  messageHeaderText: {
    flexDirection: 'row',
    alignItems: 'center', // Aligner verticalement le texte "MESSAGES" et "maintenant"
  },
  sender: {
    fontWeight: 'normal', // Pas de gras pour "MESSAGES"
    marginRight: 198, // Réduire l'espace entre "MESSAGES" et "maintenant"
  },
  timestamp: {
    fontWeight: 'normal', // Pas de gras pour "maintenant"
  },
  casadePapel: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 6, // Espacement entre l'icône de message et "CasaDePapel"
  },
  messageText: {
    fontSize: 16,
    marginTop: 6, // Espacement entre "CasaDePapel" et le message textuel
  },
  messageIcon: {
    width: 20, // ajustez la taille de l'image selon vos besoins
    height: 20, // ajustez la taille de l'image selon vos besoins
    marginRight: 2, // Réduire l'espacement entre l'icône et le texte "MESSAGES"
  },
  replyContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
  continueButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default SecurityCodePage;
