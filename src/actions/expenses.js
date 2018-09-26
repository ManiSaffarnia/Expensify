import uuid from "uuid";
import database from '../firebase/firebase';

//ADD_EXPENSE Action generator
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

//In action generator shoroo konande hast baraye addExpense. ba in mazmoon ke miad va aval be data base ezafe mikonim
//dar callback zakhire dar database ADD_expense asli ro ke baraye kar ba redux hast barmigardoonim
export const startAddExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return (dispatch) => {
        const newExpense = {
            description,
            note,
            amount,
            createdAt
        };

        database.ref('expenses').push(newExpense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...newExpense
            }))
        });
    };
};


//REMOVE_EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({id} = {}) => {
    return (dispatch) => {
        database.ref(`expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id}));
        })
    };
};

//EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updatedExpense) => {
    return (dispatch) => {
        database.ref(`expenses/${id}`).update(updatedExpense).then(()=>{
            dispatch(editExpense(id, updatedExpense));
        })
    };
};


//SET_EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

//Start SET_EXPENSE
export const startSetExpenses = () => {
    return (dispatch) => {
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((eachChild) => {
                expenses.push({
                    id: eachChild.key,
                    ...eachChild.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};