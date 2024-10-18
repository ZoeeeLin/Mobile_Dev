import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";


type InputBoxProps = {
    value: string,
    setValue: (val: string) => void,
}

function InputBox(props: InputBoxProps) : React.JSX.Element {
    return(
        <View style={style.container}>
            <TextInput
            inputMode="numeric"
            value={props.value}
            onChangeText={props.setValue}
            placeholder="Password Length (8-16)"
            style={style.InputView}
            />
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        marginVertical: 20,
    },

    InputView: {
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#FFF',
        width: '100%',
        height: 60,
        alignSelf: 'center',
        paddingStart: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        fontSize: 25,
        fontWeight: '600',
    },
});

export default InputBox;