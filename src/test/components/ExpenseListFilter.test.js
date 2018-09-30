import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import expenseTestData from '../fixture/expenses';
import { filters, altFilters } from '../fixture/filters';

let wrapper, setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount;

beforeAll(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
    />);
});

test('should render component correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should render component correctly with altFilter', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});