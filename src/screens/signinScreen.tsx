import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Socket } from 'socket.io-client';

interface SigninScreenProps {
  socket: Socket;
}

const SigninScreen: React.FC<SigninScreenProps> = ({ socket }) => {

  socket.emit('message', {});


  useEffect(() => {

    socket.on('message', (data) => {
      console.log('Received message:', data);
    });

  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Simple Page</Text>
      <Text style={styles.subtitle}>This is a basic React Native page written in TypeScript.</Text>
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
  },
});

export default SigninScreen;
