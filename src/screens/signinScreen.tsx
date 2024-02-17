import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Socket } from 'socket.io-client';
import { useNavigation } from '@react-navigation/native'; 

interface SigninScreenProps {
  socket: Socket;
}

const SigninScreen: React.FC<SigninScreenProps> = ({ socket }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation(); 

  const handleSignIn = () => {
    socket.emit('signin', { username, password });
  };

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  // useEffect(() => {
  //   socket.on('signinResponse', (data) => {
  //     console.log('Received message:', data);
  //   });

  // }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Sign In Page</Text>
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
        onPress={handleSignIn}
      />

      <Button
        title="Sign Up"
        onPress={handleSignUp} // Call handleSignUp when Sign Up button is pressed
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

export default SigninScreen;
