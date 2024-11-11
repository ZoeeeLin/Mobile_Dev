import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { TransactionEntry, TransactionType, TransactionType_bgColor } from '../utils/utility';

type fromProps = TransactionEntry & {
    setTransaction: (update: Partial<TransactionEntry>) => void;
    errors?: { title?: string; description?: string; amount?: string };
};

function TransactionForm(props: fromProps): React.JSX.Element {

    const handleTypeSelection = (selectedType: TransactionType) => {
        props.setTransaction({ type: selectedType });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Title</Text>
            <TextInput
                style={styles.input}
                value={props.title}
                onChangeText={(text) => props.setTransaction({ title: text })}
                placeholder="Title"
            />
            {props.errors?.title && <Text style={styles.errorText}>{props.errors.title}</Text>}


            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.input}
                value={props.desc}
                onChangeText={(text) => props.setTransaction({ desc: text })}
                placeholder="Add Some Description..."
                multiline
            />
            {props.errors?.description && <Text style={styles.errorText}>{props.errors.description}</Text>}

            <Text style={styles.label}>Amount</Text>
            <TextInput
                style={styles.input}
                value={props.amount.toString()}
                onChangeText={(text) => props.setTransaction({ amount: parseFloat(text) || 0 })}
                placeholder="0"
                keyboardType="numeric"
            />
            {props.errors?.amount && <Text style={styles.errorText}>{props.errors.amount}</Text>}

            <Text style={styles.label}>Transaction Type</Text>
            <View style={styles.radioGroup}>
                {Object.values(TransactionType)
                    .filter((value) => typeof value === 'number')
                    .map((type) => (
                    <TouchableOpacity
                        key={type as TransactionType}
                        style={styles.radioOption}
                        onPress={() => handleTypeSelection(type as TransactionType)}
                    >
                        <View style={styles.radioCircle}>
                            {props.type === type && <View style={styles.radioSelected} />}
                        </View>
                        <Text>{String(TransactionType[type as TransactionType])}</Text>
                    </TouchableOpacity>

                    ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        marginBottom: 20 
    },
    label: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        marginTop: 10 
    },
    input: { 
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 15,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    radioCircle: {
        height: 20,
        width: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#444',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
    },
    radioSelected: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: '#444',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginBottom: 10,
    },
});

export default TransactionForm;