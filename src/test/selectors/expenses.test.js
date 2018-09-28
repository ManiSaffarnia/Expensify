import getVisibleExpense from '../../selectors/expenses';
import moment from 'moment';
const expensesTestData = [
    {id:1, description:'Gum', note:'', amount:195, createdAt:moment(0)},
    {id:2, description: 'Rent', note:'August rent', amount:299500, createdAt: moment(0).subtract(4,"days").valueOf()},
    {id:3, description: 'food', note:'yesterday dinnet', amount:5000, createdAt: moment(0).add(4,"days").valueOf()},
    {id:4, description: 'gasoline', note:'', amount:2400, createdAt: moment(0).add(2,"days").valueOf()}
];

test('should filter by text value',()=>{
    const filters = {
      text: 'e',
      sortBy:'date',
      startDate: undefined,
      endDate: undefined
    };
   expect(getVisibleExpense(expensesTestData,filters)).toEqual([expensesTestData[3],expensesTestData[1]]);
});

test('should filter by startDate',()=>{
    const filters = {
        text: '',
        sortBy:'date',
        startDate: moment(0),
        endDate: undefined
    };
    expect(getVisibleExpense(expensesTestData,filters)).toEqual([expensesTestData[2],expensesTestData[3],expensesTestData[0]]);
});

test('should filter by endDate',()=>{
    const filters = {
        text: '',
        sortBy:'date',
        startDate: undefined,
        endDate: moment(0)
    };
    expect(getVisibleExpense(expensesTestData,filters)).toEqual([expensesTestData[0],expensesTestData[1]]);
});

test('should Sort by amount',()=>{
    const filters = {
        text: '',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    };
    expect(getVisibleExpense(expensesTestData,filters)).toEqual([expensesTestData[1],expensesTestData[2],expensesTestData[3],expensesTestData[0]]);
});

test('should Sort by date',()=>{
    const filters = {
        text: '',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    };
    expect(getVisibleExpense(expensesTestData,filters)).toEqual([expensesTestData[2],expensesTestData[3],expensesTestData[0],expensesTestData[1]]);
});

