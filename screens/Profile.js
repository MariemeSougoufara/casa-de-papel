import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';

const Profile = () => {
  const profileImage = require('../assets/Profile.jpg'); // Image de profil statique

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Account</Text>

      <View style={styles.profileImageContainer}>
        <Image source={profileImage} style={styles.profileImage} />
      </View>

      <View style={styles.detailSection}>
        <Text style={styles.label}>Nom</Text>
        <TextInput style={styles.input} value="Adama Ndiaye" editable={false} />

        <Text style={styles.label}>Numéro De Téléphone</Text>
        <TextInput style={styles.input} value="+221 781234567" editable={false} />

        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} value="adamanopendiaye089@gmail.com" editable={false} />

        <Text style={styles.label}>Adresse</Text>
        <TextInput style={styles.input} value="Parcelles Assainies U20, Dakar, Senegal" editable={false} />

        <Text style={styles.label}>Date de Naissance</Text>
        <TextInput style={styles.input} value="03/01/1990" editable={false} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 40,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: -10,
    marginBottom: 20,
    color: 'red',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  detailSection: {
    width: '90%',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#E8EAF6',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default Profile;
