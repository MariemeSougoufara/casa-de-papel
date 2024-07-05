import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ErrorScreen = ({ errorMessage, onRetry }) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="error-outline" size={50} color="red" />
      <Text style={styles.errorMessage}>{errorMessage}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.buttonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding:12
  },
  errorMessage: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  retryButton: {
    marginTop: 30,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ErrorScreen;
