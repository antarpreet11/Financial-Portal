import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"

const Expenses = (props) => {
  const [enteredFilter, setEnteredFilter] = useState("2020");

  const filterHandler = (selectedFilter) => {
    setEnteredFilter(selectedFilter);
  };

  let filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredFilter;
  });
  
  const cancelExpenseHander = (someKey) => {
    props.onCancelExpense(someKey);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={enteredFilter} onChangeFilter={filterHandler} />
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpensesList items={filteredExpenses} onCancelEx={cancelExpenseHander}/>
    </Card>
  );
};

export default Expenses;
