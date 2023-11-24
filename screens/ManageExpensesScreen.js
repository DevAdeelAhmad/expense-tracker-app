import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import IconButton from "../components/ui/IconButton";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { GlobalStyles } from "../constants/styles";
import { ExpensesContext } from '../store/expenses-context'

function ManageExpensesScreen({ route, navigation }) {
  const expenseCtx = useContext(ExpensesContext)

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpense = expenseCtx.expenses.find(expense => expense.id === editedExpenseId)

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(editedExpenseId)
    navigation.goBack();
  }
  function cancelHandler() {
    navigation.goBack();
  }
  function confirmHandler(expenseData) {
    if (isEditing) {
      expenseCtx.updateExpense(
        editedExpenseId, expenseData)
    }
    else {
      expenseCtx.addExpense(expenseData)
    }
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm defaultValues={selectedExpense} submitButtonLabel={isEditing ? "Update" : "Add"} onCancel={cancelHandler} onSubmit={confirmHandler} />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },

  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
