import './ExpenseForm.css';
import { useState } from 'react';

const ExpenseForm = (props) => {

    const [tittle, setTittle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const tittleChangeHandler = (event) => {
        setTittle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        props.onSubmit({tittle, amount, date: new Date(date)});
        setTittle('');
        setDate('');
        setAmount('');
    }

    return (
        <form onSubmit={submit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Tittle</label>
                    <input value={tittle} onChange={tittleChangeHandler} type='text'/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' value={amount} onChange={amountChangeHandler} min='0.01' step='0.01'/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' value={date} onChange={dateChangeHandler}   min='2019-01-01' max='2022-12-31'/>
                </div>
            </div>
            <button type='submit'>Send</button>
        </form>
    );
}

export default ExpenseForm;