import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from './../NewExpense/ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(2020);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expensesFilter = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
   
  // const expensesFilter = props.items.filter(expense => {
  // let expensesContent = <p> No expenses found </p>
  // if (expensesFilter.length > 0) {
  //   expensesContent = expensesFilter.map((expense) => (
  //     <ExpenseItem
  //      key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }
  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart
          expenses={expensesFilter }
        
        />

        {/* {expensesFilter.length === 0 && <p> No expenses found </p>}
        {expensesFilter.length > 0 &&
          expensesFilter.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        <ExpensesList
          items={expensesFilter}
        />
      </Card>
    </div>
  );
};
export default Expenses;
