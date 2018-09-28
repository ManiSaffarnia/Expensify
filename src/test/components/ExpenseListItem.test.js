import React from 'react';
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem';
import expensesTestData from '../fixture/expenses';

test('should render a single expense component', ()=>{
    const wrapper = shallow(<ExpenseListItem expense={expensesTestData[0]}/>);
    expect(wrapper).toMatchSnapshot();
});