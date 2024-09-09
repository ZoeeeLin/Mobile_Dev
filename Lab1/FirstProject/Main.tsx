import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from "react-native";

function Main(): React.JSX.Element{
    return(
        <SafeAreaView style={style.container}>
            <View style={style.headingArea}>
                <Text style={style.headingTxt}>This is my first Android application!</Text>
            </View>
            {/* Card */}
            <View style={style.card}>
                <Text style={style.cardTxt}>CardView</Text>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#f0ffff",
        height: '100%'
    },

    headingTxt: {
        fontSize: 30,
        fontWeight: '600',
        color: '#000',
    },

    headingArea: {
        alignItems: 'center',
        marginTop: 10,
    },

    card: {
        backgroundColor: '#6495ed',
        padding: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black'
    },

    cardTxt: {
        fontSize: 20,
        fontWeight: '400',
        color: 'black'
    }
})

export default Main;