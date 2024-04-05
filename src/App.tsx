import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkModeProvider } from './contexts/DarkModeContext';
import { io } from 'socket.io-client';
import SigninScreen from './screens/signinScreen';
import HomepageScreen from './screens/homepageScreen';
import Chat1Screen from './screens/chatScreen1';
import SettingScreen from './screens/settingScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  const socket = io('http://192.168.162.220:8080');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });
  }, []);

  return (
    <DarkModeProvider>
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="Signin"
            children={() => <SigninScreen socket={socket} />}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Homepage"
            children={() => <HomepageScreen socket={socket} />}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Chat1"
            children={() => <Chat1Screen socket={socket} />}
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="Settings"
            children={() => <SettingScreen socket={socket} />}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </DarkModeProvider>

  );
}
