import React, { useState } from 'react';
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => { 
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };
    
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };


    
    return (
        <div className = "new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing &&<ExpenseForm onSaveExpenseData = {saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
        //Basically when onSaveExpenseData is executed, it will point to saveExpenseDataHandler. Which expects a parameter
        //Usually the thing between {} is a variable, in child-to-parent, it is a function so that it can expect some parameter
    );
};

export default NewExpense;