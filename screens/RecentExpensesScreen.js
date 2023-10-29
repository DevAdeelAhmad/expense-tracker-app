import { Text } from "react-native";
import ExpensesOuput from "../components/ExpensesOutput/ExpensesOutput";

function RecentExpensesScreen() {
  return <ExpensesOuput expensesPeriod="Last 7 Days" />;
}

export default RecentExpensesScreen;
