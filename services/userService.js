import {API_URL} from '@env';

const getUser = async () =>{
    try {
        const response = await fetch(`${API_URL}/utilisateur/`);
        const json = await response.json();
        return json.items;
    } catch (error) {
        console.error(error);
    }
}

const createNewUser = async (user) => {
    try {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };

        const response = await fetch('${API_URL}/utilisateur/', requestOptions);

        // Vérifier le code d'état de la réponse
        if (!response.ok) {
            const statusCode = response.status; // Récupérer le code d'état
            const errorMessage = 'Erreur lors de la requête : ' + statusCode;
            console.log(error)
            throw new Error(errorMessage); // Propager l'erreur
        }

        const data = await response.json();
        return data; // Optionnel : retourner les données si nécessaire
    } catch (error) {
        console.error('Erreur lors de la requête :', error.message);
        // Gérer l'erreur ou la rejeter pour la traiter à l'extérieur de la fonction
        throw error;
    }
}



const modifyUser = async () => {

}

export default {createNewUser, modifyUser, getUser}