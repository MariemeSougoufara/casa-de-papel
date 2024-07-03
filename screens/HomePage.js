// HomePage.js

import React, { useEffect, useState } from 'react';
import tw from 'twrnc';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { jwtDecode } from 'jwt-decode';

import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import logo from '../assets/logo.png'
import { listOfOperations } from '../utils/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { findUserByEmail, getUserAccountInformation, getUserTransactions } from '../services/userService';
import ErrorScreen from './ErrorScreen';
import Loading from './Loading';


const HomePage = ({navigation}) => {
  const userDetails = {
    adresse: null,
    dateInscription: null,
    dateNaissance: "",
    dernierAcces: null,
    email: "",
    idUtilisateur: "",
    motDePasse: "",
    nom: "",
    prenom: "",
    telephone: ""
  };
  const informationsCompteIni  = {
    dateCreation: "", 
    etatCompte: true, 
    idCompte: "", 
    montantInitial:null, 
    numCompte: "",
     plafonds: null, 
     proprietaire: ""
  }
  const handleRetry = () =>{
    return ;
  }
  
    const [solde, setSolde] = useState(0);
    const options = listOfOperations.slice(0,6);
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");
    const [user, setUser] = useState(userDetails);
    const [loading, setLoading] = useState(false);
    const [error,  setError] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [informationCompte, setInformationCompte] = useState(informationsCompteIni);

   const setTokenAndEmail  = async () => {
      setToken(await AsyncStorage.getItem("token"));
      setEmail(await AsyncStorage.getItem("email"));
   }
    useEffect(() =>{
      setTokenAndEmail();
      
    },[])

    useEffect(() =>{
      const fetchUser = async () => {
        try {
          const userData = await findUserByEmail(email, token);
          setUser(userData);
          const transactionData = await getUserTransactions(email, token);
          const userAccountInfo = await getUserAccountInformation(email, token);
          setTransactions(transactionData);
          setInformationCompte(userAccountInfo);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      if (email && token) {
        fetchUser();
      }
      
    },[email, token])

  
  return (
    <ScrollView style={tw`h-full`}>
      {loading ?
      <Loading />
       :  
    <View style={tw`w-full h-full bg-white p-5 `}>
    <View style={tw`bg-black flex-row justify-between h-45 rounded`}>
        <View style={tw`p-4 justify-between`}>
            <View>
              <Text style={tw`text-white font-bold text-lg`}>{user.nom}{ user.prenom}</Text>
            </View>
            <Text style={tw`text-white font-bold text-lg`}>
                SOLDE
            </Text>
            <Text style={tw`text-red-600 text-2xl font-bold`}>
                {informationCompte.montantInitial} FCFA
            </Text>
        </View>
        <View>
            <Image source={logo} style={styles.logo}/>
        </View>
    </View>
    
    <View>
      <View style={tw`flex-row justify-between mt-3 items-center`}>
        <Text style={tw`text-md font-bold text-gray-600 mt-5`}>
        Operations
        </Text>
        <TouchableOpacity style={tw`bg-gray-200 px-4 py-2 rounded-lg mt-2`} onPress={() => navigation.navigate('allOperations')}>
            <Text style={tw`text-gray-700 font-bold`}>All</Text>
        </TouchableOpacity>
      </View>
      
        <View style={tw`flex p-2 mt-5 flex-row flex-wrap gap-2 `}>
        {options.map((item) => {
          return <TouchableOpacity activeOpacity={0.1} key = {item.key} onPress={() => navigation.navigate(item.path)}>
          <View style={tw`p-3  mr-2 h-12 w-40  shadow-xl flex-row justify-between bg-gray-100`}>
          <Icon name={item.iconName} size={24} color="red" />
             <Text style={tw`text-gray-700 font-bold`}>{item.title}</Text>
          </View>
          </TouchableOpacity>
      })}
        </View>
    </View>
    
    <View>
    <View style={tw`flex-row justify-between mt-3 items-center`}>
    <Text style={tw`text-md font-bold text-gray-600 mt-5`}>
    Transactions
    </Text>
    <TouchableOpacity style={tw`bg-gray-200 px-4 py-2 rounded-lg mt-2`} onPress={() => navigation.navigate('allOperations')}>
        <Text style={tw`text-gray-700 font-bold`}>All</Text>
    </TouchableOpacity>
  </View>
  {
  loading ? (
    <Loading />  // Affiche un composant de chargement pendant que les transactions se chargent
  ) : (
    transactions.length === 0 ? (
      <Text>Aucune transaction disponible</Text>  // Affiche un message s'il n'y a pas de transactions
    ) : (
      transactions.map((item) => (
        <TouchableOpacity onPress={() => navigation.navigate('DetailTransaction')} key={item.id}>
          <View style={tw`bg-white mt-4 rounded p-2 shadow-md`}>
            <View style={tw`flex flex-row justify-between mb-2`}>
              <Text style={tw`text-red-600`}>{item.typeTransaction}</Text>
              <Text>{item.montantTransaction} FCFA</Text>
            </View>
            <Text>{item.dateTransaction}</Text>
          </View>
        </TouchableOpacity>
      ))
    )
  )
}

    </View>

    
    

</View>}
    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#888',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default HomePage;

