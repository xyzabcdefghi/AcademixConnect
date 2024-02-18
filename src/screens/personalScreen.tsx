import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Socket } from 'socket.io-client';
import { NavigationContext } from '@react-navigation/native';

interface PersonalScreenProps {
  socket: Socket;
}

const PersonalScreen: React.FC<PersonalScreenProps> = ({ socket }) => {
  const navigation = React.useContext(NavigationContext);


  return (
    <View style={styles.container}>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    marginBottom: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});

export default PersonalScreen;
