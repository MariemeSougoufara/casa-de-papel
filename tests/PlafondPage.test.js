import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import PlafondsPage from '../screens/Plafond';

describe('PlafondsPage', () => {
  test('renders all plafonds correctly', () => {
    const { getByText } = render(<PlafondsPage />);

    expect(getByText('Retrait')).toBeDefined();
    expect(getByText('Paiement par carte')).toBeDefined();
    expect(getByText('Virement')).toBeDefined();
  });

  test('opens and closes the modal correctly', () => {
    const { getByText, queryByText } = render(<PlafondsPage />);

    // Open the modal
    fireEvent.press(getByText('Retrait'));
    expect(getByText('Demande d\'augmentation')).toBeDefined();

    // Close the modal
    fireEvent.press(getByText('Annuler'));
    expect(queryByText('Demande d\'augmentation')).toBeNull();
  });

  test('handles the increase request correctly', async () => {
    const { getByText, getByPlaceholderText } = render(<PlafondsPage />);

    // Open the modal
    fireEvent.press(getByText('Retrait'));

    // Enter a new amount and submit the request
    fireEvent.changeText(getByPlaceholderText('Nouveau montant'), '800000');
    fireEvent.press(getByText('Envoyer la demande'));

    // Wait for the alert to be shown
    await waitFor(() => {
      expect(getByText('Demande envoyée !')).toBeDefined();
    });
  });

  test('handles the cancel request correctly', async () => {
    const { getByText, queryByText } = render(<PlafondsPage />);

    // Select a plafond with a pending request
    fireEvent.press(getByText('Retrait'));

    // Cancel the request
    fireEvent.press(getByText('Annuler la demande'));

    // Wait for the alert to be shown
    await waitFor(() => {
      expect(getByText('Demande annulée !')).toBeDefined();
    });

    // Ensure the "Demande" indicator is no longer visible
    expect(queryByText('Demande')).toBeNull();
  });
});

