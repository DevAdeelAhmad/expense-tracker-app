import { Children, createContext, useReducer } from "react";


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
    date: new Date("2022-12-20"),
  },
  {
    id: "e7",
    description: "GoldLeaf",
    amount: 30.5,
    date: new Date("2022-12-21"),
  },
  {
    id: "e8",
    description: "Food",
    amount: 250.51,
    date: new Date("2021-12-22"),
  },
  {
    id: "e9",
    description: "Food",
    amount: 250.51,
    date: new Date("2021-12-22"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => { },
  deleteExpense: (id) => { },
  updateExpense: (id, { description, amount, date }) => { },
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "Add":
      const id = Date.now().toString() + Math.random().toString();
      return [{ ...action.payload }, ...state];
    case "Update":
      const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id)
      const updatableExpense = state[updatableExpenseIndex]
      const updatedItem = { ...updatableExpense, ...action.payload.data }
      const updatedExpenses = [...state]
      updatedExpenses[updatableExpenseIndex] = updatedItem
    case "Delete":
      return state.filter((expense) => expense.id !== action.payload)
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: "Delete", payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({ type: "Update", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  }

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
