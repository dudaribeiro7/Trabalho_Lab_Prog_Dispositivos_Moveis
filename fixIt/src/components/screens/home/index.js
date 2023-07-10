import React, { useState } from "react";
import { ScrollView, StatusBar, TouchableWithoutFeedback } from "react-native";
import { Text, TextInput, View, StyleSheet, Image, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

export default function Home() {

    const [nome, setNome] = useState('');

    const navigationimc = useNavigation();

    const handleLogin = () => {
        navigationimc.navigate('Login'); // Navega para a tela de cadastro
    };


    return (
        <View></View>
    )
}
const styles = StyleSheet.create({
   
})