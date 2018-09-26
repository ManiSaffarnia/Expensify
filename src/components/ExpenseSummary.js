import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import expenseTotal from '../selectors/expense-total'
import selectExpenses from '../selectors/expenses'

const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
    const totalAmount = numeral(expensesTotal / 100).format('$0,0.00');
    return (
        <div>
            {expensesCount > 0 && <h1>Viewing ${expensesCount} {expensesCount > 1 ? 'expenses' : 'expense'} totalling {totalAmount}</h1>}
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