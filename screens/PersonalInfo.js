import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { registerUser } from '../services/userService';

const PersonalInfo = ({ navigation, route }) => {
    const [focusedInput, setFocusedInput] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // State for loading indicator

  

    const validationSchema = Yup.object().shape({
        nom: Yup.string().required('Le nom est requis'),
        prenom: Yup.string().required('Le prénom est requis'),
        addresse: Yup.string().required("L'adresse est requise"),
        telephone: Yup.string().required('Le téléphone est requis'),
        dateNaissance: Yup.string()
            .required('La date de naissance est requise')
            .matches(/^\d{4}-\d{2}-\d{2}$/, 'La date de naissance doit être au format YYYY-MM-DD'),
    });

    const handleFormSubmit = async (values) => {
        const userDetails = {
            ...values,
            email: route.params.email,
            motDePasse: route.params.motDePasse,
        };

        setIsLoading(true); // Start loading indicator

        try {
            await registerUser(userDetails);
            navigation.navigate("SignIn");
        } catch (error) {
            console.error('Registration failed:', error.message);
        } finally {
            setIsLoading(false); // Stop loading indicator
        }
    };

    return (
        <SafeAreaView style={style.container}>
            <ScrollView contentContainerStyle={style.scrollViewContent}>
                <Formik
                    initialValues={{
                        nom: '',
                        prenom: '',
                        dateNaissance: '',
                        addresse: '',
                        telephone: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleFormSubmit}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
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
                                    placeholder="Date de Naissance (YYYY-MM-DD)"
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
                            {isLoading && (
                                <ActivityIndicator
                                    size="large"
                                    color="red"
                                    style={{ marginTop: 20 }}
                                />
                            )}
                        </View>
                    )}
                </Formik>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    inputStyle: {
        height: 50,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 20,
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
    buttonContainer: {
        borderRadius: 50,
    },
    floatingButton: {
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
        color: 'red',
        marginBottom: 10,
    },
});

export default PersonalInfo;
