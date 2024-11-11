import React, { useEffect, useState } from "react";
import { 
    Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import { FAB } from "react-native-paper";
import { getInitialData, TransactionEntry, TransactionType_bgColor } from "../utils/utility";

function Home({navigation, route} : {navigation : any, route: any}) : React.JSX.Element {
    const [transactions, setTransactions] = useState<TransactionEntry[]>([]);

    useEffect(() => {
        setTransactions(getInitialData());
    }, []);

    useEffect(() => {
        if (route.params?.newTransaction) {
            const newTransaction = route.params.newTransaction;
    
            const isDuplicate = transactions.some((transaction) => transaction.id === newTransaction.id);
            if (!isDuplicate) {
                setTransactions((prevTransactions) => [...prevTransactions, newTransaction]);
            }
    
            navigation.setParams({ newTransaction: null });
        }
    }, [route.params?.newTransaction]);

    const renderTransaction = ({ item }: { item: TransactionEntry }) => (
        <TouchableOpacity
            style={[styles.transactionItem, { backgroundColor: TransactionType_bgColor[item.type] }]}
            onPress={() => navigation.navigate('Details', { transactionId: item.id })}
        >
            <Text style={styles.transactionTitle}>{item.title}</Text>
            <Text style={styles.transactionAmount}>${item.amount.toFixed(2)}</Text>
        </TouchableOpacity>
    );
    
    return (
        <View style={styles.container}>
        {transactions.length === 0 ? (
            <Text style={styles.emptyMessage}>Add Transaction To See Entry Here.</Text>
        ) : (
            <FlatList
            data={transactions}
            renderItem={renderTransaction}
            keyExtractor={(item) => item.id.toString()}
            />
        )}
        <FAB
            style={styles.fab}
            icon="plus"
            onPress={() => navigation.navigate('Add Transaction', { previousTransactions: transactions })}
        />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20 
    },

    header: { 
        fontSize: 24, 
        fontWeight: 'bold', 
        marginBottom: 10 
    },

    emptyMessage: { 
        textAlign: 'center', 
        marginTop: 300, 
        fontSize: 30, 
        color: '#666' 
    },

    transactionItem: { 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },

    transactionTitle: { 
        fontSize: 18,
        flex: 1,
    },
    
    transactionAmount: { 
        fontSize: 16, 
        color: '#666',
        textAlign: 'right',
        flexShrink: 0,
    },

    fab: { 
        position: 'absolute', 
        margin: 30, 
        right: 0, 
        bottom: 0, 
        backgroundColor: '#4CAF50' 
    },
});

export default Home;