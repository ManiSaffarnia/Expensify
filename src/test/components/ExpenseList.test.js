import React from 'react';
import { shallow } from 'enzyme'
import {ExpenseList} from '../../components/ExpenseList';
import expensesTestData from '../fixture/expenses';

test('should render ExpenseList component with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expensesTestData}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseList component with no Expense', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>);
    expect(wrapper).toMatchSnapshot();
});