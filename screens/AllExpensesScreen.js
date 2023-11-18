import { useContext } from "react";
import ExpensesOuput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from '../store/expenses-context'

function AllExpensesScreen() {
  const expensesCtx = useContext(ExpensesContext);
  return <ExpensesOuput expenses={expensesCtx.expenses} expensesPeriod="Total" />;
}

export default AllExpensesScreen;
