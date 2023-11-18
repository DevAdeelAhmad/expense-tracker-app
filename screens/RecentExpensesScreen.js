import ExpensesOuput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from '../store/expenses-context'
import { getDateMinusDays } from "../util/date";

function RecentExpensesScreen() {
  const expensesCtx = useContext(ExpensesContext)

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7)

    return expense.date > date7DaysAgo;
  })
  return <ExpensesOuput expenses={recentExpenses} expensesPeriod="Last 7 Days" />;
}

export default RecentExpensesScreen;
