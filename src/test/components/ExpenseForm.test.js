import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenseDataTest from '../fixture/expenses';

//render Form empty
test('should render ExpenseFrom', () => {
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
});

//render Form with expense value
test('should render ExpenseFrom with data: EDIT', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenseDataTest[0]}/>);
    expect(wrapper).toMatchSnapshot();
});

//render Error 
test('should render Error for invalid data', () => {
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('errorState').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

//set description by input change
test('should set desciption value', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = 'test value';
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('description')).toBe(value);
});

//set note by textarea
test('should set note value on textarea change', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = 'test note from textArea';
    wrapper.find('textarea').simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('note')).toBe(value);
});

//amount with valid value
test('should set amount input with correct value', () => {
    const wrapper = shallow(<ExpenseForm/>);
    const value = '123.22';
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe(value);
});

//amount with INVALID value
test('should not set amount input on wrong input value', ()=>{
    const wrapper = shallow(<ExpenseForm/>);
    const value = '123.231'; //3 ragham ashar dare
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value
        }
    });
    expect(wrapper.state('amount')).toBe('');
});

test('should create a new expense for valid form submition', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenseDataTest[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{}
    });
    expect(wrapper.state('errorState')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        note: expenseDataTest[0].note,
        description: expenseDataTest[0].description,
        createdAt: expenseDataTest[0].createdAt,
        amount: expenseDataTest[0].amount
    });
});

test('should set new date on date change', ()=>{
    const newTime = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('#date').prop('onDateChange')(newTime);
    expect(wrapper.state('createdAt')).toEqual(newTime);
});

test('should set calander focus', ()=>{
        const focused = true;
        const wrapper = shallow(<ExpenseForm />);
        wrapper.find('#date').prop('onFocusChange')({focused});
        expect(wrapper.state('calendarFocused')).toBe(focused);
    });
