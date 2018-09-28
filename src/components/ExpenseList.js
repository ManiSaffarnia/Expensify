import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => {
    return (
        <div>
            <h1>
                Expense List
            </h1>

            {
                props.expenses.length > 0 ? (
                    props.expenses.map((expense) => (
                        <ExpenseListItem {...expense} key={expense.id} />
                    ))
                    ) : (
                    <p>There is no Expense</p>
                    )
            }
        
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