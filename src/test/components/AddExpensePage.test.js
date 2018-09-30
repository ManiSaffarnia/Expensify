import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenseTestData from '../fixture/expenses';

let startAddExpense, history, wrapper;

beforeAll(() => {
    startAddExpense = jest.fn();
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />);
});

test('should render the component', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handel on submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenseTestData[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenseTestData[0]);
});