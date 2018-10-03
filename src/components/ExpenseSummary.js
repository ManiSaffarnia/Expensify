import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import expenseTotal from '../selectors/expense-total';
import selectExpenses from '../selectors/expenses';
import { Link } from 'react-router-dom';

const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
    const totalAmount = numeral(expensesTotal / 100).format('$0,0.00');

    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span> {expensesCount} </span> {expensesCount > 1 ? 'expenses' : 'expense'} totalling <span> {totalAmount} </span></h1>
                <div className="page-header__actions">
                    <Link to="/create" className="button"> Add Expense </Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const filteredExpense = selectExpenses(state.expenses, state.filters);
    return ({
        expensesCount: filteredExpense.length,
        expensesTotal: expenseTotal(filteredExpense)
    });
};

export default connect(mapStateToProps)(ExpenseSummary);