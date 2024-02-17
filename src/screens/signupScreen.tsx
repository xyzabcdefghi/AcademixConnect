import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Socket } from 'socket.io-client';

interface SignupScreenProps {
  socket: Socket;
}

const SignupScreen: React.FC<SignupScreenProps> = ({ socket }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    socket.emit('signup', { username, password });
  };

  // useEffect(() => {
  //   socket.on('signupResponse', (data) => {
  //     console.log('Received message:', data);
  //   });

  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sign Up Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <Button
        title="Sign In"
        onPress={handleSignup}
      />
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

export default SignupScreen;
