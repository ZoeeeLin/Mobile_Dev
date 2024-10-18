import React from "react";
import { View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type FormCheckBoxProps = {
    id: string,
    label: string,
    color: string,
    onChange?: (isChecked: boolean) => void,
    isChecked: boolean,
}


function FormCheckBox(props: FormCheckBoxProps) : React.JSX.Element{
    
    return(
        <View>
            <BouncyCheckbox
            size={25}
            fillColor={props.color}
            unFillColor="#FFFFFF"
            text={props.label}
            iconStyle={{ borderColor: props.color }}
            innerIconStyle={{ borderWidth: 2 }}
            textStyle={{ fontFamily: "JosefinSans-Regular", textDecorationLine: 'none' }}
            onPress={(isChecked: boolean) => {
                if(props.onChange){
                    props.onChange(isChecked);
                }
                console.log(isChecked)
            }}
            isChecked={props.isChecked}
            />
        </View>
    );
}

export default FormCheckBox;