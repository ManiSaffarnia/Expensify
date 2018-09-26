import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//ADD_EXPENSE Acrion generator
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
//SET_TEXT_FILTER
const setTextFilter = (text='') => ({
    type: 'SET_TEXT_FILTER',
    text
});
//SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});
//SORT_BY_AMOUNT
const sortByAmount = () => ({
   type: 'SORT_BY_AMOUNT'
});
//SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});
//SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

//default value
const expenseReducerDefaultState = [];

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

//====================================================================
//Expense Reducer
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
            break;
        case 'REMOVE_EXPENSE':
            return state.filter((expense)=> ( expense.id !== action.id));
            break;
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }
};

//filter Reducer
const filterReducer = (state=filterReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_TEXT_FILTER':
            return({
                ...state,
                text: action.text
            });
        case 'SORT_BY_DATE':
            return({
                ...state,
                sortBy: 'date'
            });
        case 'SORT_BY_AMOUNT':
            return({
                ...state,
                sortBy: 'amount'
            });
        case 'SET_START_DATE':
            return({
                ...state,
                startDate: action.startDate
            });
        case 'SET_END_DATE':
            return({
                ...state,
                endDate: action.endDate
            });
        default:
            return state;
    }
};

//=============================================================================
// store creation
const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);



//visible expense
const getVisibleExpense = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof  endDate !== 'number' || expense.createdAt <= endDate;

        return textMatch && startDateMatch && endDateMatch;
    }).sort((a,b)=>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};



store.subscribe(()=>{
    const currentState = store.getState();
    const visibleExpense = getVisibleExpense(currentState.expenses,currentState.filters);
    console.log(visibleExpense);
});


const expenseOne = store.dispatch(addExpense({description:'buy IPhone', note:'buy iphone X', amount:100, createdAt: -10000}));
const expenseTwo = store.dispatch(addExpense({description:'buy Coffee', note:'starbucks', amount:400, createdAt: -1000}));
store.dispatch(addExpense({description:'food', note:'fast food', amount:600, createdAt: -2000}));


//store.dispatch(removeExpense({id: expenseOne.expense.id}));

//store.dispatch(editExpense(expenseTwo.expense.id, {note:'mani', amount: 900}));

//store.dispatch(setTextFilter('iphone'));


//store.dispatch(sortByAmount());
//store.dispatch(sortByDate());

/*store.dispatch(setStartDate(-2000));
store.dispatch(setEndDate(100));*/
store.dispatch(sortByAmount());
store.dispatch(sortByDate());


const demoState = {
    expenses: [{
        id: 'asdaqfsc',
        description: 'rent',
        note: 'this is final paymnet',
        amount: 123000,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};


