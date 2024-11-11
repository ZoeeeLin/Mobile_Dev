import React, { useEffect, useLayoutEffect, useState } from "react";
import { 
    View,
    StyleSheet,
    Button,
} from "react-native";
import TransactionForm from "../components/TransactionForm";
import { addEditTransaction, getNewID, getTransactionByID, TransactionEntry, TransactionType } from "../utils/utility";

function AddTransaction({navigation, route} : {navigation : any, route: any}) : React.JSX.Element {
    const isEditMode = Boolean(route.params?.isEditMode);
    const transactionId = route.params?.transactionId;
    const [transaction, setTransaction] = useState<TransactionEntry>({
        id: '',
        title: '',
        desc: '',
        amount: 0,
        type: TransactionType.Essential,
    });

    useEffect(() => {
        if (isEditMode && transactionId) {
            const existingTransaction = getTransactionByID(transactionId);
            if (existingTransaction) {
                setTransaction(existingTransaction);
            }
        }
    }, [isEditMode, transactionId]);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: isEditMode ? 'Update Transaction' : 'Add Transaction',
        });
    }, [navigation, isEditMode]);
    
    const handleSaveTransaction = () => {
        if (validateFields()) {
            const newTransaction = { ...transaction, id: isEditMode ? transaction.id : getNewID() };
            addEditTransaction(newTransaction);
            const previousTransactions = route.params?.previousTransactions || [];
            console.log('Transaction saved:', newTransaction);
            navigation.navigate('Home', {
                newTransaction,
                previousTransactions: [...previousTransactions, newTransaction],
            });
        }
    };

    const handleTransactionChange = (update: Partial<TransactionEntry>) => {
        setTransaction((prevTransaction) => ({
            ...prevTransaction,
            ...update,
        }));
    };

    const [errors, setErrors] = useState<{ title?: string; description?: string; amount?: string }>({});
    
    const validateFields = () => {
        const newErrors: { title?: string; description?: string; amount?: string } = {};

        if (!transaction.title) newErrors.title = 'Title cannot be empty';
        if (!transaction.desc) newErrors.description = 'Description cannot be empty';
        if (!transaction.amount) newErrors.amount = 'Amount cannot be empty';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <View style={styles.container}>
            <TransactionForm 
            id={transaction.id} 
            title={transaction.title}
            desc={transaction.desc}
            amount={transaction.amount}
            type={transaction.type}
            setTransaction={handleTransactionChange}
            errors={errors}
            />

            <Button title="Submit" onPress={handleSaveTransaction} />
        </View>
    );
};
    
const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20 
    },
});
    
export default AddTransaction;