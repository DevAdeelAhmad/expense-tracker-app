import { View, StyleSheet, Text } from 'react-native'
import React, { useState } from 'react'
import Input from './Input'
import Button from '../ui/Button'
import { getFormattedDate } from '../../util/date.js'

export default function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
    const [inputValue, setInputValue] = useState({
        amount: defaultValues ? defaultValues.amount.toString() : '',
        date: defaultValues ? getFormattedDate(defaultValues.date) : '',
        description: defaultValues ? defaultValues.description : ''
    });

    function inputChangeHandler(inputIdentifier, enteredValue) {
        setInputValue((currentInputValues) => {
            return {
                ...currentInputValues,
                [inputIdentifier]: enteredValue
            }
        });
    }

    function submitHandler() {
        const expenseData = {
            amount: inputValue.amount,
            date: new Date(inputValue.date),
            description: inputValue.description
        };
        onSubmit(expenseData)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Your Expense</Text>
            <View style={styles.inputsRow}>
                <Input style={styles.rowInput} label={"Amount"} textInputConfig={{
                    keyboardType: "decimal-pad",
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: inputValue['amount']
                }} />
                <Input style={styles.rowInput} label={"Date"} textInputConfig={{
                    placeholder: "YYYY-MM-DD",
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: inputValue['date']
                }} />
            </View>
            <Input label={"Description"} textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: inputValue['description']
            }} />
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode="flat" onPress={onCancel}>
                    Cancel
                </Button>
                <Button style={styles.button} onPress={submitHandler}>
                    {submitButtonLabel}
                </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
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