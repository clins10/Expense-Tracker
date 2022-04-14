import './ExpenseForm.css';
import './NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] =  useState('false');


    const saveExpenseData = (enteredExpenseData) => {

        const ExpenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        };  
        // console.log(ExpenseData);
        props.onAddExpense(ExpenseData);
        setIsEditing('false')

    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const cancelEditingHandler = () => {
        setIsEditing(false);
    }


    
    return (
        <div className="new-expense">
    
           {!isEditing && <button onClick={startEditingHandler}>Add new Expense</button>}
           {isEditing && (
           <ExpenseForm 
            onSaveExpenseData={saveExpenseData}
            onCancel={cancelEditingHandler}
            
            />
            )}
        </div>

    );
}

export default NewExpense;