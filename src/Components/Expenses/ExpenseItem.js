import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import "./Expenses.css";
import Card from "../UIComponents/Card";

function ExpenseItem({ expenses, year, getFilteredExpenses }) {
  const filteredExpenses = expenses.filter(
    (ele) => ele.date.getFullYear().toString() === year
  );

  return (
    <>
      {filteredExpenses.length === 0 ? (
        <p className="expenses-list__fallback">Found no expense item</p>
      ) : (
        filteredExpenses.map((ele) => {
          const { title, amount } = ele;
          return (
            <li className="expenses-list" key={ele.id}>
              <Card className="expense-item">
                <ExpenseDate date={ele.date} />
                <div className="expense-item__description">
                  <h2>{title}</h2>
                  <div className="expense-item__price">₹ {amount}</div>
                </div>
              </Card>
            </li>
          );
        })
      )}
    </>
  );
}

export default ExpenseItem;
