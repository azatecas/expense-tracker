import React from 'react';
import ExpensesItem from './ExpenseItem';

const Expenses = () => {
    return (
        <div className="expense-cont">
            <h3>Costs</h3>
            <ExpensesItem />
        </div>
    )
}

export default Expenses;