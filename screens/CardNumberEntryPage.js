import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, Button, Modal, Dimensions, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

const CardNumberEntryPage = ({ navigation }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [appCode, setAppCode] = useState('');

  const handleCardNumberChange = (text) => {
    const formattedText = text.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
    setCardNumber(formattedText);
  };

  const handleContinue = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log('Code de l\'app saisi:', appCode);
    setIsModalVisible(false);
    navigation.navigate('ActivationConfirmationPage'); // Redirection vers la page de confirmation
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.banner}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.bannerText}>Activation carte bancaire</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={require('../assets/activationcarte1.jpg')}
          style={styles.cardImage}
        />
        <Text style={styles.instructionText}>
          Veuillez saisir les 16 chiffres inscrits sur le recto de votre carte
        </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={handleCardNumberChange}
          maxLength={19}
          placeholder="1234 5678 9012 3456"
        />
        <Button
          title="Continuer"
          onPress={handleContinue}
          color="#007BFF"
        />
      </ScrollView>

      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Entrez votre code de l'app</Text>
            <TextInput
              style={styles.modalInput}
              keyboardType="numeric"
              secureTextEntry
              value={appCode}
              onChangeText={setAppCode}
              maxLength={4} // Limite à 4 chiffres
              placeholder="1234"
            />
            <TouchableOpacity style={styles.modalButton} onPress={handleOk}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  banner: {
    width: Dimensions.get('window').width,
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingVertical: 20,
    zIndex: 1,
  },
  logo: {
    width: 40,
    height: 40,
    position: 'absolute',
    left: 10,
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 100, // Augmentez la valeur pour éviter que le contenu ne passe sous la bannière
  },
  cardImage: {
    width: 300,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  instructionText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  modalInput: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CardNumberEntryPage;
