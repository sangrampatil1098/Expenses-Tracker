import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";
const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    handleEditing();
  };
  const [isEditing, setIsEditing] = useState(false);

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={handleEditing}>Add new expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpense={saveExpenseHandler}
          handleEditing={handleEditing}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
