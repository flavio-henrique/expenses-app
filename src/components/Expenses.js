import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./Filter/ExpenseFilter";
import { useState } from "react";

function Expenses(props) {
  const [filter, setFilter] = useState("2020");


  const filterHandler = (filterValue) => {
    setFilter(filterValue);
  };

	const expenseFiltered = props.expenses.filter((item) => {
		return item.date.getFullYear().toString() === filter
	});

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filter} onFilter={filterHandler} />

      {expenseFiltered.map((item) => (
        <ExpenseItem
          key={Math.random()}
          tittle={item.tittle}
          amount={item.amount}
          date={item.date}
        ></ExpenseItem>
      ))}
    </Card>
  );
}

export default Expenses;
