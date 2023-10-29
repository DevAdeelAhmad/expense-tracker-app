import { Text, View } from "react-native";

function ExpensesSummary({ periodName, expenses }) {
  const expnsesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>Rs. {expnsesSum.toFixed(2)}</Text>
    </View>
  );
}
export default ExpensesSummary;
