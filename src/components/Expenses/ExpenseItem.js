import React from 'react'; 
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from '../UI/Card'
import "../UI/Buttons.css"

const ExpenseItem = (props) => {
  



  
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;