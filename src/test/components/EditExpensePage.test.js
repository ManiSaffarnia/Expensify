import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenseTestData from '../fixture/expenses';

let wrapper, startEditExpense, startRemoveExpense, history;

beforeAll(() => {
    history = {
        push: jest.fn()
    };
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    wrapper = shallow(<EditExpensePage startEditExpense={startEditExpense} startRemoveExpense={startRemoveExpense} history={history} expense={expenseTestData[0]} />)
});

test('should render EditExpensePage component', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should call startEditExpense with valid data', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenseTestData[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenseTestData[0].id, expenseTestData[0]);
});

test('should call startRemoveExpense correctly', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenseTestData[0].id });
});