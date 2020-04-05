import React from 'react';
import ExpensesItem from './ExpenseItem';


const Expenses = () => {
    return (
        <div className="expense-cont">
            <h3>Monthly Costs</h3>
            <ExpensesItem />
        </div>
    )
}

export default Expenses;