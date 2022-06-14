import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {
      tittle: 'teste',
      amount: 450.67,
      date: new Date(2022,2,3)
    },
    {
      tittle: 'as',
      amount: 450.67,
      date: new Date(2021,2,2)
    },
    {
      tittle: 'as',
      amount: 450.67,
      date: new Date(2020,2,1)
    }
  ]

  const [expensesState, setExpenses] = useState(expenses);

  const setFormDataHandler = (formData) => {
    setExpenses(() => [formData, ...expensesState]);
  }

  return (
    <div>
      <NewExpense onSubmit={setFormDataHandler}/>
      <Expenses expenses={expensesState}/>
    </div>
  );
}

export default App;
