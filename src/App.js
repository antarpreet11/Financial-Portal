import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 6, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 1, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 4, 12),
  },
  {
    id: "e5",
    title: "Books",
    amount: 800,
    date: new Date(2021, 9, 11),
  },
  {
    id: "e6",
    title: "Laptop",
    amount: 1500,
    date: new Date(2021, 10, 11),
  },
  {
    id: "e7",
    title: "Grocery",
    amount: 100,
    date: new Date(2020, 0, 5),
  },
  {
    id: "e8",
    title: "Christmas Gifts",
    amount: 2500,
    date: new Date(2020, 11, 12),
  },
  {
    id: "e9",
    title: "Dental Expenses",
    amount: 2000,
    date: new Date(2019, 10, 5),
  },
  {
    id: "e10",
    title: "Udemy Course",
    amount: 25,
    date: new Date(2020, 7, 30),
  },
  {
    id: "e11",
    title: "GameStop calls",
    amount: 2000,
    date: new Date(2020, 9, 30),
  }
  
];


const App = () => {

  const [expenses, setExpenses] = useState(dummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  console.log(expenses);
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses items={expenses} />
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
