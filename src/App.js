import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = []

const App = () => {

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }
  const cancelExpenseHandler = (cancelKey) => {
    const newArray = [...expenses].filter((ex) => ex.id !== cancelKey)
    setExpenses(newArray)
  }  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} onCancelExpense = {cancelExpenseHandler}/>
    </div>
  );

  // Alternative to this,
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
}

export default App;
