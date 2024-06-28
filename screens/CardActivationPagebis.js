import React from 'react';
import { View, Text, StyleSheet, Image, Button, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const CardActivationPagebis = () => {
  const navigation = useNavigation();

  const handleStart = () => {
    console.log('Processus d\'activation de la carte commencé');
    navigation.navigate('CardNumberEntryPage'); // Utilisez le nom correct de l'écran
  };

  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.bannerText}>Activation carte bancaire</Text>
      </View>

      <View style={styles.content}>
        <Image
          source={require('../assets/activationcarte1.jpg')}
          style={styles.cardImage}
        />
        <View style={styles.redBanner}>
          <Text style={styles.bannerText}>
            Activez dès à présent votre carte bancaire pour utiliser pleinement votre compte
          </Text>
        </View>
        <Button
          title="Commencer"
          onPress={handleStart}
          color="#007BFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: width,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 60,
  },
  bannerText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  cardImage: {
    width: 300,
    height: 200,
    marginBottom: 40,
    resizeMode: 'contain',
  },
  redBanner: {
    backgroundColor: 'red',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});

export default CardActivationPagebis;
