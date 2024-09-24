import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet
} from "react-native";
import ProfileCard from "../components/ProfileCard";

function Main(): React.JSX.Element{
    return(
        <SafeAreaView style={style.container}>
            <ProfileCard />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    container : {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#5F9EA0'
    }
})

export default Main;