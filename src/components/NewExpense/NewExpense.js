import './NewExpense.css';

import ExpenseForm from './ExpenseForm';
import { useState } from 'react';


const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);



    const setFormData = (formData) => {
        props.onSubmit(formData);
        setShowForm(false);
    }
    console.log('teste');

    const newExpenseHandler = () => {
        setShowForm(true);
    }

    return <div className='new-expense'>
        {showForm 
        ? <ExpenseForm onSubmit={setFormData}/> 
        : <button onClick={newExpenseHandler}>Add new Expense</button>}
        
    </div>

}

export default NewExpense;