import React, { useEffect, useLayoutEffect, useState } from "react";
import { 
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { getTransactionByID, TransactionEntry, TransactionType_bgColor } from "../utils/utility";

function Details({navigation, route} : {navigation : any, route: any}) : React.JSX.Element {
    const [transaction, setTransaction] = useState<TransactionEntry | null>(null);
    const {transactionId} = route.params;

    useEffect(() => {
        const fetchedTransaction = getTransactionByID(transactionId);
        setTransaction(fetchedTransaction);
    }, [transactionId]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Details',
            headerRight: () => (
                <TouchableOpacity onPress={handleEdit}>
                    <Text style={styles.editButton}>Edit</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation, transaction]);

    const handleEdit = () => {
        if (transaction) {
            navigation.navigate('Add Transaction', { transactionId: transaction.id, isEditMode: true  });
        }
    };

    if (!transaction) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={[styles.cardTitleContainer, { backgroundColor: TransactionType_bgColor[transaction.type] }]}>
                    <Text style={styles.cardTitle}>{transaction.title}</Text>
                </View>
                <View style={styles.cardContent}>
                    <Text style={styles.cardDescription}>{transaction.desc}</Text>
                    <Text style={styles.cardAmount}>${transaction.amount.toFixed(2)}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    editButton: {
        fontSize: 22,
        color: '#fff',
        marginRight: 15,
    },
    card: {
        width: '90%',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    cardTitleContainer: {
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
    },
    cardContent: {
        backgroundColor: '#515891',
        padding: 20,
        alignItems: 'center',
        paddingVertical: 40, 
        paddingHorizontal: 30,
        justifyContent: 'space-between',
    },
    cardDescription: {
        fontSize: 22,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 50,
    },
    cardAmount: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 1,
    },
});

export default Details;