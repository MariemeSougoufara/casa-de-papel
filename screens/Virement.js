import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import tw from 'twrnc'; // Assurez-vous d'importer twrnc pour le style

const VirementScreen = () => {
  const [nomDestinataire, setNomDestinataire] = useState('');
  const [telephoneDestinataire, setTelephoneDestinataire] = useState('');
  const [emailDestinataire, setEmailDestinataire] = useState('');
  const [montant, setMontant] = useState('');
  const [description, setDescription] = useState('');

  const handleVirement = () => {
    // Validation du montant (positif et supérieur à un seuil)
    const montantNum = parseFloat(montant);
    if (isNaN(montantNum) || montantNum <= 0) {
      Alert.alert('Erreur', 'Le montant doit être un nombre positif.');
      return;
    }
    // Ici vous pouvez ajouter la validation supplémentaire pour le seuil minimum

    // Logique pour effectuer le virement
    // Exemple : appel à une fonction de service pour le virement
    // virementService.faireVirement(nomDestinataire, telephoneDestinataire, emailDestinataire, montantNum, description);

    // Réinitialisation des champs après le virement
    setNomDestinataire('');
    setTelephoneDestinataire('');
    setEmailDestinataire('');
    setMontant('');
    setDescription('');

    Alert.alert('Succès', 'Le virement a été effectué avec succès.');
  };

  return (
    <View style={tw`flex-1 p-5 bg-white`}>
      <Text style={tw`text-lg font-bold mb-3`}>Effectuer un Virement</Text>
      <TextInput
        style={tw`border-b-2 border-gray-300 p-2 mb-3`}
        placeholder="Nom complet du destinataire"
        value={nomDestinataire}
        onChangeText={setNomDestinataire}
      />
      <TextInput
        style={tw`border-b-2 border-gray-300 p-2 mb-3`}
        placeholder="Numéro de téléphone du destinataire"
        value={telephoneDestinataire}
        onChangeText={setTelephoneDestinataire}
        keyboardType='number-pad'
      />
      <TextInput
        style={tw`border-b-2 border-gray-300 p-2 mb-3`}
        placeholder="Email du destinataire"
        value={emailDestinataire}
        onChangeText={setEmailDestinataire}
        keyboardType="email-address"
      />
      <TextInput
        style={tw`border-b-2 border-gray-300 p-2 mb-3`}
        placeholder="Montant du virement (FCFA)"
        value={montant}
        onChangeText={setMontant}
        keyboardType="numeric"
      />
      <TextInput
        style={tw`border-b-2 border-gray-300 p-2 mb-3`}
        placeholder="Description du virement"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity
        style={tw`bg-black py-2 rounded items-center`}
        onPress={handleVirement}
      >
        <Text style={tw`text-white font-bold`}>Effectuer le Virement</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VirementScreen;
