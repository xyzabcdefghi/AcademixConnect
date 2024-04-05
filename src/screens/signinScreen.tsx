import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Socket } from 'socket.io-client';
import { NavigationContext } from '@react-navigation/native';
import CustomButton from '../components/customButton';
import { Image } from 'react-native';
import { Dimensions } from 'react-native';
import SwipeGesture from 'react-native-swipe-gestures';
import { useDarkMode } from '../contexts/DarkModeContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const quarterCircleLeftSize = Math.sqrt(Math.pow(windowWidth / 4, 2) + Math.pow(windowHeight / 4, 2));
const quarterCircleOffset = quarterCircleLeftSize / 2;


interface SigninScreenProps {
  socket: Socket;
}

const SigninScreen: React.FC<SigninScreenProps> = ({ socket }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = React.useContext(NavigationContext);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const handleSignIn = () => {
    socket.emit('signin', { username, password });
    navigation?.navigate('Homepage');
  };

  const handleSwipe = () => {
    navigation?.navigate('Settings');
  };

  const ParentButton = () => {
    console.log('Parent Button Pressed');
  };

  useEffect(() => {
    const handleSigninResponse = (data: any) => {
      console.log('Received message:', data);
    };

    socket.on('signinResponse', handleSigninResponse);

    return () => {
      socket.off('signinResponse', handleSigninResponse);
    };
  }, []);


  return (

    <SwipeGesture
      onSwipeRight={handleSwipe}
      onSwipeLeft={handleSwipe}
      config={{
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
      }}
      style={styles.swipeContainer}
    >

      <View style={[styles.container, { backgroundColor: isDarkMode ? "#240A3F" : '#FFF8F1', }]}>

        <Image
          source={isDarkMode ? require('../assets/signinimgdark.png') : require('../assets/signinimg.jpeg')}
          style={{ marginTop: windowHeight * 0.075 }}
        />

        <Text style={[styles.title, { color: isDarkMode ? "#FFF8F1" : '#240A3F', }]}>Welcome</Text>

        <View style={styles.parentContainer}>

          <Text style={[styles.parentText, { color: isDarkMode ? '#FFF8F1' : '#240A3F', }]}>Not a student?</Text>

          <CustomButton title=' Parent'
            onPress={ParentButton}
            buttonStyle={{ marginBottom: 16, }}
            textStyle={{
              color: isDarkMode ? '#FFF8F1' : '#240A3F',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          />
        </View>

        <TextInput
          style={[styles.input, { marginBottom: 10, color: isDarkMode ? '#FFF8F1' : '#240A3F' }]}
          placeholder=" Username"
          placeholderTextColor={isDarkMode ? '#FFF8F1' : '#240A3F'}
          onChangeText={(text) => setUsername(text)}
          value={username}
        />

        <TextInput
          style={[styles.input, { marginBottom: 10, color: isDarkMode ? '#FFF8F1' : '#240A3F' }]}
          placeholder=" Password"
          placeholderTextColor={isDarkMode ? '#FFF8F1' : '#240A3F'}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
        />


        <CustomButton
          title='Sign In'
          onPress={handleSignIn}
          buttonStyle={
            {
              width: '50%',
              height: 40,
              backgroundColor: isDarkMode ? '#FFF8F1' : '#240A3F',
              borderColor: 'gray',
              borderWidth: 1,
              marginBottom: 16,
              paddingHorizontal: 5,
              borderRadius: 20,
              justifyContent: 'center',
              margin: windowHeight * 0.04,
            }


          }
          textStyle={
            {
              color: isDarkMode ? '#240A3F' : '#FFF8F1',
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
            }
          }
        />


        <View style={styles.quarterCircleLeftContainer}>
          <View style={[styles.quarterCircle, { backgroundColor: isDarkMode ? '#FFF8F1' : '#70427C', }]} />
        </View>

        <View style={styles.quarterCircleRightContainer}>
          <View style={[styles.quarterCircle, { backgroundColor: isDarkMode ? '#FFF8F1' : '#70427C', }]} />
        </View>

      </View>
    </SwipeGesture>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  swipeContainer: {
    flex: 1,
  },

  parentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {

    fontSize: windowHeight * 0.05,
    fontWeight: 'bold',
    margin: 10,
  },
  parentText: {
    fontSize: 20,
    marginBottom: 16,
  },

  input: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 5,
    borderRadius: 15,
    margin: 10,
  },

  quarterCircleLeftContainer: {
    position: 'absolute',
    left: -quarterCircleOffset,
    bottom: -quarterCircleOffset,
    zIndex: -1,
  },
  quarterCircleRightContainer: {
    position: 'absolute',
    right: -quarterCircleOffset,
    bottom: -quarterCircleOffset,
    zIndex: -1,
  },
  quarterCircle: {
    width: quarterCircleLeftSize,
    height: quarterCircleLeftSize,
    borderRadius: quarterCircleLeftSize / 2,

  },

});

export default SigninScreen;
