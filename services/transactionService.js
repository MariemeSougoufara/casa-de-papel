const BASE_URL = 'https://example.com/api'; // Remplacez par l'URL de votre API backend

// Fonction pour effectuer un virement
export const makeTransfer = async (beneficiary, amount, token) => {
  try {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        beneficiary,
        amount,
      }),
    };

    const response = await fetch(`${BASE_URL}/transactions/transfer`, config);
    if (!response.ok) {
      throw new Error('Erreur lors du virement.');
    }

    return await response.json(); // Retourne les données de réponse de l'API backend
  } catch (error) {
    console.error('Erreur lors du virement : ', error);
    throw new Error('Erreur lors du virement.');
  }
};

// Fonction pour récupérer toutes les transactions de l'utilisateur
export const getUserTransactions = async (email, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(`${BASE_URL}/transactions?email=${encodeURIComponent(email)}`, config);
    if (!response.ok) {
      throw new Error('Erreur lors de la récupération des transactions.');
    }

    return await response.json(); // Retourne les données de réponse de l'API backend
  } catch (error) {
    console.error('Erreur lors de la récupération des transactions : ', error);
    throw new Error('Erreur lors de la récupération des transactions.');
  }
};

// Ajoutez d'autres fonctions de service nécessaires pour votre application

