import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Ciggerate",
    amount: 27.5,
    date: new Date("2023-12-19"),
  },
  {
    id: "e2",
    description: "Lighter",
    amount: 40,
    date: new Date("2023-12-20"),
  },
  {
    id: "e3",
    description: "GoldLeaf",
    amount: 30.5,
    date: new Date("2023-12-21"),
  },
  {
    id: "e4",
    description: "Food",
    amount: 250.51,
    date: new Date("2023-12-22"),
  },
  {
    id: "e5",
    description: "Ciggerate",
    amount: 27.5,
    date: new Date("2023-12-19"),
  },
  {
    id: "e6",
    description: "Lighter",
    amount: 40,
    date: new Date("2023-12-20"),
  },
  {
    id: "e7",
    description: "GoldLeaf",
    amount: 30.5,
    date: new Date("2023-12-21"),
  },
  {
    id: "e8",
    description: "Food",
    amount: 250.51,
    date: new Date("2023-12-22"),
  },
  {
    id: "e9",
    description: "Food",
    amount: 250.51,
    date: new Date("2023-12-22"),
  },
];

function ExpensesOuput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}
export default ExpensesOuput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
