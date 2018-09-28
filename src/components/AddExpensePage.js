import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from "../actions/expenses";

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            //console.log(expense);
            props.dispatch(startAddExpense({
                description: expense.description,
                note: expense.note,
                amount: expense.amount,
                createdAt: expense.createdAt
            }));
            props.history.push('/');
        }} />
    </div>
);

export default connect()(AddExpensePage);