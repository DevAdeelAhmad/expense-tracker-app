import { Children, createContext, useReducer } from "react";

export const ExpensesContext = createContext({
  expense: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "Add":
    case "Delete":
    case "Update":
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer);

  function addExpenses({ ExpenseData }) {
    dispatch();
  }

  return <ExpensesContext.Provider>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
