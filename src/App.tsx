import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { io } from 'socket.io-client';
import SigninScreen from './screens/signinScreen';
import SignupScreen from './screens/signupScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const socket = io('http://192.168.210.220:8080');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('signinResponse', (data) => {
      console.log('Received message:', data);
    });

    socket.on('signupResponse', (data) => {
      console.log('Received message:', data);
    });

  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Signin"
          // Pass the socket object as a prop to SigninScreen
          children={() => <SigninScreen socket={socket} />}
          options={{ title: 'Sign In' }}
        />

        <Stack.Screen
          name="Signup"
          // Pass the socket object as a prop to SigninScreen
          children={() => <SignupScreen socket={socket} />}
          options={{ title: 'Sign Up' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
