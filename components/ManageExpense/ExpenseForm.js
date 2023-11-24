import { View, StyleSheet, Text } from 'react-native'
import React from 'react'
import Input from './Input'

export default function ExpenseForm() {
    function amountChangeHandler() {

    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input style={styles.rowInput} label={"Amount"} textInputConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: amountChangeHandler,
                }} />
                <Input style={styles.rowInput} label={"Date"} textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onChangeText: () => { }
                }} />
            </View>
            <Input label={"Description"} textInputConfig={{
                multiline: true,
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginVertical: 20,
        textAlign: "center",
    },
    inputsRow: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    rowInput: {
        flex: 1
    }
})