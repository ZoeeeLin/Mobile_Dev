// Header.tsx
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>To-Do List App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 10,
        backgroundColor: "#af504c", // Change color to match your app's theme
        alignItems: "center",
        justifyContent: "center",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
});

export default Header;