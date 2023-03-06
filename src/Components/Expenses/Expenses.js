import React from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import "./Expenses.css";
import Card from "../UIComponents/Card";
import ExpenseChart from "../Chart/ExpenseChart";
function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2023");
  const onFilterChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter(
    (ele) => ele.date.getFullYear().toString() === selectedYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onFilterChangeHandler={onFilterChangeHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseItem expenses={props.expenses} year={selectedYear} />
    </Card>
  );
}

export default Expenses;
