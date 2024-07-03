import {API_URL} from '@env';

// Adjust the base URL as needed

// Function to register a new user
async function registerUser(user) {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to register user:", error);
        throw error;
    }
}

// Function to log in a user
async function loginUser(loginRequest) {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginRequest)
        });

        if (!response.ok) {
            throw new Error(`Login error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to log in user:", error);
        throw error;
    }
}

// services/userService.js

const findUserByEmail = async (email, token) => {
    try {
      const response = await fetch(`${API_URL}/users/email/${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error finding user by email:', error);
      throw error;
    }
  };

const getUserTransactions = async (email, token) => {
    try {
        const response = await fetch(`${API_URL}/transaction/${email}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
    
        const userData = await response.json();
        return userData;
      } catch (error) {
        console.error('Erreur by finding user transactions', error);
        throw error;
      }
}

const getUserAccountInformation =  async (email, token) => {
  try {
      const response = await fetch(`${API_URL}/compte/${email}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });
  
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Erreur by finding user account informationd', error);
      throw error;
    }
}
  
// Example usage:
// const newUser = {
//     nom: "Doe",
//     prenom: "John",
//     dateNaissance: "1990-01-01",
//     adresse: "123 Street, City",
//     email: "user@example.com",
//     motDePasse: "password",
//     telephone: "123-456-7890"
// };

// registerUser(newUser).then(response => {
//     console.log("User registered successfully:", response);
// }).catch(error => {
//     console.error("Error registering user:", error);
// });

 const loginRequest = {
     email: "user@example.com",
     password: "password"
 };

// loginUser(loginRequest).then(response => {
//     console.log("User logged in successfully:", response);
// }).catch(error => {
//     console.error("Error logging in user:", error);
// });

export { 
  registerUser, 
  loginUser, 
  findUserByEmail,
  getUserAccountInformation,
  getUserTransactions
};
