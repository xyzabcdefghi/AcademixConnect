import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, TextStyle, ViewStyle } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
    margin?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title, buttonStyle, textStyle, margin }) => {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle, { margin }]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '20%',
    },
    text: {
        color: 'white',
        fontSize: 16,
    },
});

export default CustomButton;
