import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, TextInput, Alert } from 'react-native';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons'; // Importer FontAwesome ou tout autre bibliothèque d'icônes que vous utilisez

const PlafondsPage = () => {
  const [plafonds, setPlafonds] = useState([
    { id: 1, type: 'Retrait', montant: 400000, date: '01/01/2024', demande: false },
    { id: 2, type: 'Paiement par carte', montant: 150000, date: '01/01/2024', demande: false },
    { id: 3, type: 'Virement', montant: 1000000, date: '01/01/2024', demande: false },
  ]);

  const [selectedPlafond, setSelectedPlafond] = useState(null);
  const [newMontant, setNewMontant] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleDemandeAugmentation = () => {
    const montant = parseInt(newMontant);
    // Vérification des limites spécifiques de l'UEMOA
    if (selectedPlafond && montant >= 400000 && montant <= 2000000) {
      const updatedPlafonds = plafonds.map(plafond => {
        if (plafond.id === selectedPlafond.id) {
          return { ...plafond, montant, demande: true };
        }
        return plafond;
      });
      setPlafonds(updatedPlafonds);
      setModalVisible(false);
      setNewMontant('');
      Alert.alert('Demande envoyée !', `Votre demande d'augmentation pour le plafond ${selectedPlafond.type} a été envoyée.`);
    } else {
      Alert.alert('Erreur', 'Veuillez sélectionner un plafond et spécifier un nouveau montant valide entre 400000 et 2000000 FCFA.');
    }
  };

  const handleAnnulerDemande = () => {
    if (selectedPlafond) {
      const updatedPlafonds = plafonds.map(plafond => {
        if (plafond.id === selectedPlafond.id) {
          return { ...plafond, demande: false };
        }
        return plafond;
      });
      setPlafonds(updatedPlafonds);
      Alert.alert('Demande annulée !', `La demande d'augmentation pour le plafond ${selectedPlafond.type} a été annulée.`);
    } else {
      Alert.alert('Erreur', 'Veuillez sélectionner un plafond à annuler.');
    }
  };

  return (
    <View style={tw`flex-1 bg-gray-100 p-4`}>
      <Text style={tw`text-md mb-4 text-red-600 text-center`}>Gestion des Plafonds</Text>
      <ScrollView contentContainerStyle={tw`flex-grow`}>
        {plafonds.map((plafond, index) => (
          <TouchableOpacity
            key={index}
            style={[
              tw`bg-white p-4 rounded-lg shadow-lg mb-4`,
              selectedPlafond && selectedPlafond.id === plafond.id ? tw`bg-black` : tw`bg-white`
            ]}
            onPress={() => setSelectedPlafond(plafond)}
          >
            <View style={tw`flex-row items-center justify-between mb-2`}>
              <Text style={[tw`text-xl font-bold`, selectedPlafond && selectedPlafond.id === plafond.id ? tw`text-white` : tw`text-black`]}>
                {plafond.type}
              </Text>
              {plafond.demande && (
                <View style={tw`bg-yellow-500 rounded-full px-2 py-1`}>
                  <Text style={tw`text-white text-sm`}>Demande</Text>
                </View>
              )}
            </View>
            <View style={tw`flex-row items-center justify-between mb-2`}>
              <Text style={[tw`text-lg`, selectedPlafond && selectedPlafond.id === plafond.id ? tw`text-white` : tw`text-black`]}>
                Montant : {plafond.montant} FCFA
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <FontAwesome name="edit" size={20} style={tw`text-gray-500`} />
              </TouchableOpacity>
            </View>
            <View style={tw`absolute bottom-4 right-4`}>
              {plafond.demande && (
                <FontAwesome name="check-circle" size={24} style={[tw`text-green-500`, plafond.id === selectedPlafond?.id ? tw`text-black` : tw`text-gray-500`]} />
              )}
            </View>
            <Text style={tw`text-lg`}>Date de dernière modification : {plafond.date}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={tw`flex-1 justify-center items-center bg-gray-900 bg-opacity-50`}>
          <View style={tw`bg-white p-4 rounded-lg w-80`}>
            <Text style={tw`text-xl font-bold mb-4 text-center`}>Demande d'augmentation</Text>
            <Text style={tw`text-lg mb-4`}>{selectedPlafond ? `Plafond : ${selectedPlafond.type}` : ''}</Text>
            <TextInput
              style={tw`bg-gray-200 p-2 rounded-lg mb-4`}
              placeholder="Nouveau montant"
              keyboardType="numeric"
              value={newMontant}
              onChangeText={setNewMontant}
            />
            <TouchableOpacity
              style={tw`bg-blue-500 p-2 rounded-lg`}
              onPress={handleDemandeAugmentation}
            >
              <Text style={tw`text-white text-center font-bold`}>Envoyer la demande</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-red-500 p-2 rounded-lg mt-2`}
              onPress={() => setModalVisible(false)}
            >
              <Text style={tw`text-white text-center font-bold`}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      {selectedPlafond && selectedPlafond.demande && (
        <TouchableOpacity
          style={tw`bg-red-500 p-2 rounded-lg absolute bottom-4 right-4`}
          onPress={handleAnnulerDemande}
        >
          <Text style={tw`text-white text-center font-bold`}>Annuler la demande</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PlafondsPage;
