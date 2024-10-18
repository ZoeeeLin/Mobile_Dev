import React, { useState } from "react";
import {
    View,
    Text,
    Clipboard,
    StyleSheet,
} from "react-native";
import InputBox from "./components/InputBox";
import FormCheckBox from "./components/FormCheckBox";
import Btn from "./components/Btn";
import Output from "./components/Output";
import { generatePasswordString } from "./utility/passwordGenerator";
import * as utils from "./utility/Consts";
import {showErrorSnackbar, showSuccessSnackBar, showInfoSnackBar} from "./utility/utils";

const generateRandomLength = (minLength: number, maxLength: number): number => {
    const randomValue = Math.random();
    const adjustedValue = Math.floor(randomValue * (maxLength - minLength + 1)) + minLength;
    //console.log(`Random value: ${randomValue}, Adjusted length: ${adjustedValue}`);
    return adjustedValue;
};

const INITIAL_PASSWORD_REQ: utils.PasswordRequirement = {
    length: generateRandomLength(8, 16),
    includeUpper: false,
    includeLower: false,
    includeNumber: false,
    includeSymbol: false
};

function Main() : React.JSX.Element {

    const [value, setValue] = useState("");
    const [generatedPassword, setGeneratedPassword] = useState("");

    const [passwordReq, setPasswordReq] = useState<utils.PasswordRequirement>(INITIAL_PASSWORD_REQ);
    
    const handleCheckboxChange = (id: string, isChecked: boolean) => {
        switch (id) {
            case "Upper":
                setPasswordReq(prev => ({ ...prev, includeUpper: isChecked }));
                break;
            case "Lower":
                setPasswordReq(prev => ({ ...prev, includeLower: isChecked }));
                break;
            case "Special":
                setPasswordReq(prev => ({ ...prev, includeSymbol: isChecked }));
                break;
            case "Numbers":
                setPasswordReq(prev => ({ ...prev, includeNumber: isChecked }));
                break;
        }
    };

    function copyTxt() {
        Clipboard.setString(generatedPassword);
        showSuccessSnackBar("Successful copy.")
    };

    function handleGenerator() {
        if (!value) {
            showErrorSnackbar("Invalid length value");
            return;
        }

        const isNumeric = /^\d+$/.test(value);
        if (!isNumeric) {
            showErrorSnackbar("Please enter a valid number for password length.");
            return;
        }

        if (value.length < 8 || value.length > 16) {
            showErrorSnackbar("Password length must be between 8 and 16.");
            return;
        }

        if (!passwordReq.includeUpper && !passwordReq.includeLower && !passwordReq.includeNumber && !passwordReq.includeSymbol) {
            showErrorSnackbar("At least one complexity criteria must be selected.");
            return;
        }

        const randomLength = generateRandomLength(8, 16);
        setPasswordReq(prev => {
            const updatedReq = { ...prev, length: randomLength };
            const password = generatePasswordString(updatedReq);
            setGeneratedPassword(password);
            return updatedReq;
        });
    };

    function handleReset() {
        setPasswordReq(INITIAL_PASSWORD_REQ);
        setGeneratedPassword("");
        setValue("");
        showInfoSnackBar("Cleared.")
    };

    return (
        <View>
            <Text style={styles.titleTxt}>Password Generator</Text>
            <InputBox value={value} setValue={setValue}/>
            <FormCheckBox 
            id="Upper"
            label="Upper Case Letter"
            color="blue"
            isChecked={passwordReq.includeUpper}
            onChange={(isChecked) => handleCheckboxChange("Upper", isChecked)}
            />
            <FormCheckBox 
            id="Lower"
            label="Lower Case Letter"
            color="green"
            isChecked={passwordReq.includeLower}
            onChange={(isChecked) => handleCheckboxChange("Lower", isChecked)}
            />
            <FormCheckBox 
            id="Special"
            label="Special Character"
            color="red"
            isChecked={passwordReq.includeSymbol}
            onChange={(isChecked) => handleCheckboxChange("Special", isChecked)}
            />
            <FormCheckBox 
            id="Numbers"
            label="Numbers"
            color="purple"
            isChecked={passwordReq.includeNumber}
            onChange={(isChecked) => handleCheckboxChange("Numbers", isChecked)}
            />
            <Output generatedPassword={generatedPassword} placeholder="Select Options..." handleCopy={copyTxt}/>
            <Btn type={1} title="Generate Password" onPress={handleGenerator}/>
            <Btn type={2} title="Reset" onPress={handleReset} />
        </View>
    );
}

const styles = StyleSheet.create({
    titleTxt: {
        fontSize: 30,
        fontWeight: '600',
        color: '#a8143e',
        textAlign: 'center',
    },
});
    
export default Main;