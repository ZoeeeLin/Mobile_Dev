import React from "react";
import { Alert, StyleSheet, Text, TouchableOpacity } from "react-native";
import MainLayout from "../layouts/MainLayout";

function AboutScreen({ navigation }: {navigation : any}) {
    const currentDate = new Date().toLocaleDateString();

    const handleNamePress = () => {
        Alert.alert("Surprise!", "You found the Easter egg! 🎉");
    };

    return (
        <MainLayout>
            <Text style={styles.title}>The name of the Assignment: Navigation and Routing</Text>
            <Text style={styles.desc}>Description: This is a To-do list application.</Text>
            <TouchableOpacity onPress={handleNamePress}>
                <Text style={styles.developer}>Developer: Yi-Chen Lin</Text></TouchableOpacity>
            <Text style={styles.date}>Current Date: {currentDate}</Text>
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 26, 
        fontWeight: 'bold',
        color: '#4cabaf',
    },
    desc: {
        fontSize: 23, 
        marginVertical: 10,
        color: '#35777a',
        fontWeight: 'bold',
    },
    developer: {
        fontSize: 23, 
        marginVertical: 10,
        color: '#af504c',
        fontWeight: 'bold'
    },
    date: {
        fontSize: 22, 
        marginBottom: 20,
        color: '#af504c',
        fontWeight: 'bold'
    }
})

export default AboutScreen;