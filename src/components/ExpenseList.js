import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
    return (
        <div>
            <h1>
                Expense List
            </h1>
            {props.expenses.map((expense) => (
                <ExpenseListItem {...expense} key={expense.id} />
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    //console.log(state);
    return ({
        expenses: selectExpenses(state.expenses, state.filters)
    });
};

export default connect(mapStateToProps)(ExpenseList);