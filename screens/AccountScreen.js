import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';

const AccountScreen = () => {
  const profileImage = require('../assets/Profile.jpg'); // Image de profil statique

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.topBarText}>Casa De Papel</Text>
      </View>
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
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: 'black',
    width: '100%',
    marginTop: 20,
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  topBarText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 30,
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

export default AccountScreen;
