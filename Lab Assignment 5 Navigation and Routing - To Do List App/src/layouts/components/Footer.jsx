// Footer.tsx
import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2024 To-Do List. All rights reserved.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        padding: 10,
        backgroundColor: "#333",
        alignItems: "center",
        justifyContent: "center",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
    },
    footerText: {
        fontSize: 12,
        color: "#fff",
    },
});

export default Footer;

