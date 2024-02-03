import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { io } from 'socket.io-client';
import SigninScreen from './screens/signinScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const socket = io('http://192.168.210.220:8080');

  useEffect(() => {


    socket.on('connect', () => {
      console.log('Connected to server');
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
