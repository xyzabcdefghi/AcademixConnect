import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Socket } from 'socket.io-client';
import SwipeGesture from 'react-native-swipe-gestures';
import { NavigationContext } from '@react-navigation/native';
import CustomButton from '../components/customButton';

interface HomepageScreenProps {
    socket: Socket;
}

const HomepageScreen: React.FC<HomepageScreenProps> = ({ socket }) => {
    const navigation = React.useContext(NavigationContext);


    const handleRightSwipe = () => {
        navigation?.navigate('Settings');
    };

    const handleLeftSwipe = () => {
        navigation?.navigate('Chat1');
    };

    return (
        <SwipeGesture
            onSwipeRight={handleRightSwipe}
            onSwipeLeft={handleLeftSwipe}
            config={{
                velocityThreshold: 0.3,
                directionalOffsetThreshold: 80,
            }}
            style={styles.swipeContainer}
        >
            <View style={styles.container}>

                <CustomButton
                    title="Attendance"
                    onPress={() => { navigation?.navigate('Attendance'); }}
                    buttonStyle={{ backgroundColor: 'black' }}
                    margin={10}
                    textStyle={{ fontSize: 25 }}
                />

                <CustomButton
                    title="Internal Marks"
                    onPress={() => { navigation?.navigate('InternalMarks'); }}
                    buttonStyle={{ backgroundColor: 'black' }}
                    margin={10}
                    textStyle={{ fontSize: 25 }}
                />

                <CustomButton
                    title="Grade Sheet"
                    onPress={() => { navigation?.navigate('GradeSheet'); }}
                    buttonStyle={{ backgroundColor: 'black' }}
                    margin={10}
                    textStyle={{ fontSize: 25 }}
                />

                <CustomButton
                    title="Personal"
                    onPress={() => { navigation?.navigate('Personal'); }}
                    buttonStyle={{ backgroundColor: 'black' }}
                    margin={10}
                    textStyle={{ fontSize: 25 }}
                />

            </View>

        </SwipeGesture>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    swipeContainer: {
        flex: 1,
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

export default HomepageScreen;
