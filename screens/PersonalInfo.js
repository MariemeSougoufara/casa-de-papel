import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import userService from '../services/userService';
import { Button } from 'react-native-elements';
// import axios  from "axios";



const PersonalInfo = ({ navigation }) => {
    useEffect(() => {
<<<<<<< HEAD
        const user = {
            nom: "Doe",
            prenom: "Diouf",
            datenaissance: "2024-05-29T00:00:00Z",
            adresse: "123 Main St, City, Country",
            motdepasse: "password123",
            email: "john.doe@example.com",
            dateinscription: "2024-05-29T00:00:00Z",
            dernieracces: "2024-05-29T00:00:00Z"
        }

        // createNewUser(user);
        userService.getUser();
        // userService.getUser();
=======
        
>>>>>>> ddba7b7 (envoie de mail, integration de l'api)
    }, []);

    const [focusedInput, setFocusedInput] = useState(null);

    const validationSchema = Yup.object().shape({
        nom: Yup.string().required('Le nom est requis'),
        prenom: Yup.string().required('Le prénom est requis'),
        addresse: Yup.string().required("L'adresse est requise"),
        telephone: Yup.string().required('Le téléphone est requis'),
        dateNaissance: Yup.string()
            .required('La date de naissance est requise')
            .matches(/^\d{2}\/\d{2}\/\d{4}$/, 'La date de naissance doit être au format JJ/MM/AAAA'),
        sexe: Yup.string().required('Le sexe est requis'),
        pays: Yup.string().required('Le pays est requis'),
        motDePasse: Yup.string()
            .required('Le mot de passe est requis')
            .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    });

    return (
        <SafeAreaView style={style.container}>
            <ScrollView contentContainerStyle={style.scrollViewContent}>
                <Formik
                    initialValues={{
                        email: '',
                        nom: '',
                        prenom: '',
                        addresse: '',
                        telephone: '',
                        dateNaissance: '',
                        sexe: '',
                        pays: '',
                        motDePasse: ''
                    }}
                    validationSchema={validationSchema}
                    onSubmit = { (values) => {
                        console.log(values);
                        
                        navigation.navigate('HomePage');
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, touched, errors }) => (
                        <View style={style.formContainer}>
                            <View>
                                <TextInput
                                    style={[
                                        style.inputStyle,
                                        focusedInput === 'nom' && style.focusedInputStyle,
                                        touched.nom && errors.nom && style.errorInputStyle
                                    ]}
                                    placeholder="Nom"
                                    onFocus={() => setFocusedInput('nom')}
                                    onBlur={() => {
                                        handleBlur('nom');
                                        setFocusedInput(null);
                                    }}
                                    onChangeText={handleChange('nom')}
                                    value={values.nom}
                                />
                                {touched.nom && errors.nom && <Text style={style.errorText}>{errors.nom}</Text>}
                            </View>
                            <View>
                                <TextInput
                                    style={[
                                        style.inputStyle,
                                        focusedInput === 'prenom' && style.focusedInputStyle,
                                        touched.prenom && errors.prenom && style.errorInputStyle
                                    ]}
                                    placeholder="Prénom"
                                    onFocus={() => setFocusedInput('prenom')}
                                    onBlur={() => {
                                        handleBlur('prenom');
                                        setFocusedInput(null);
                                    }}
                                    onChangeText={handleChange('prenom')}
                                    value={values.prenom}
                                />
                                {touched.prenom && errors.prenom && <Text style={style.errorText}>{errors.prenom}</Text>}
                            </View>
                            <View>
                                <TextInput
                                    style={[
                                        style.inputStyle,
                                        focusedInput === 'addresse' && style.focusedInputStyle,
                                        touched.addresse && errors.addresse && style.errorInputStyle
                                    ]}
                                    placeholder="Adresse"
                                    onFocus={() => setFocusedInput('addresse')}
                                    onBlur={() => {
                                        handleBlur('addresse');
                                        setFocusedInput(null);
                                    }}
                                    onChangeText={handleChange('addresse')}
                                    value={values.addresse}
                                />
                                {touched.addresse && errors.addresse && <Text style={style.errorText}>{errors.addresse}</Text>}
                            </View>
                            <View style={style.phoneContainer}>
                                <TextInput
                                    style={[
                                        style.inputStyle,
                                        focusedInput === 'telephone' && style.focusedInputStyle,
                                        touched.telephone && errors.telephone && style.errorInputStyle
                                    ]}
                                    placeholder="Téléphone"
                                    onFocus={() => setFocusedInput('telephone')}
                                    onBlur={() => {
                                        handleBlur('telephone');
                                        setFocusedInput(null);
                                    }}
                                    onChangeText={handleChange('telephone')}
                                    value={values.telephone}
                                    keyboardType="phone-pad"
                                />
                                {touched.telephone && errors.telephone && <Text style={style.errorText}>{errors.telephone}</Text>}
                            </View>
                            <View>
                                <TextInput
                                    style={[
                                        style.inputStyle,
                                        focusedInput === 'dateNaissance' && style.focusedInputStyle,
                                        touched.dateNaissance && errors.dateNaissance && style.errorInputStyle
                                    ]}
                                    placeholder="Date de Naissance (JJ/MM/AAAA)"
                                    onFocus={() => setFocusedInput('dateNaissance')}
                                    onBlur={() => {
                                        handleBlur('dateNaissance');
                                        setFocusedInput(null);
                                    }}
                                    onChangeText={handleChange('dateNaissance')}
                                    value={values.dateNaissance}
                                />
                                {touched.dateNaissance && errors.dateNaissance && <Text style={style.errorText}>{errors.dateNaissance}</Text>}
                            </View>
                            <View style={style.buttonContainer}>
                                <TouchableOpacity style={style.floatingButton} onPress={handleSubmit}>
                                    <Text style={style.floatingButtonText}>Suivant</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    inputStyle: {
        // padding: 15,
        // borderRadius: 12,
        // borderStyle: 'solid',
        // borderColor: 'grey',
        // marginBottom: 20,
        // backgroundColor: '#EEEEEE',
        // fontSize: 16,
        // borderWidth: 0.6
        height: 50,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20, // Espace ajouté entre les champs de saisie
        paddingHorizontal: 10,
        color: 'black',
    },
    focusedInputStyle: {
        borderColor: 'red',
    },
    errorInputStyle: {
        borderColor: 'red',
    },
    container: {
        flex: 1,
    },
    scrollViewContent: {
        padding: 10,
    },
    formContainer: {
        marginTop: 20,
    },
    phoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    phoneInputStyle: {
        flex: 1,
        padding: 15,
        borderRadius: 12,
        borderStyle: 'solid',
        borderColor: 'grey',
        backgroundColor: '#EEEEEE',
        fontSize: 16,
        borderWidth: 0.6,
    },
    pickerStyle: {
        padding: 15,
        borderRadius: 12,
        borderStyle: 'solid',
        borderColor: 'grey',
        marginBottom: 20,
        backgroundColor: '#EEEEEE',
        fontSize: 16,
        borderWidth: 0.6,
    },
    buttonContainer: {
        borderRadius: 50,
    },
    floatingButton: {
        // backgroundColor: '#007AFF',
        // borderRadius: 50,
        // paddingVertical: 15,
        // paddingHorizontal: 30,
        backgroundColor: 'red',
        width: '100%',
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 5,
        marginTop: 10,
    },
    floatingButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    errorText: {
        color: 'black',
        marginBottom: 10,
        fontWeight:'black'
    },
});

export default PersonalInfo;