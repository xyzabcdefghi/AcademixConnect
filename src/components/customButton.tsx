import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps, TextStyle, ViewStyle } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
    title: string;
    buttonStyle?: ViewStyle;
    textStyle?: TextStyle;
    margin?: number;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title, buttonStyle, textStyle}) => {
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={[textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
};


export default CustomButton;
