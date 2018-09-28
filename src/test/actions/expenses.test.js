import { addExpense, removeExpense, editExpense } from '../../actions/expenses';
import uuid from "uuid";

test("should remove expense action object", () => {
    expect(removeExpense({ id: 123 })).toEqual({
        type: "REMOVE_EXPENSE",
        id: 123
    })
});

test("should Edit expense action object", () => {
    expect(editExpense("123b", { note: "salam" })).toEqual({
        type: "EDIT_EXPENSE",
        id: "123b",
        updates: {
            note: "salam"
        }

    })
});

test("should create an addExpense Action", () => {
    const expenseData = {
        id: '1',
        description: "food",
        note: "a chicken",
        amount: 2000,
        createdAt: 100
    };
    expect(addExpense(expenseData)).toEqual({
        type: "ADD_EXPENSE",
        expense: expenseData
    })
});

test('should add expense to database and store ', () => {

});

test('should add expense to database and store with default value', () => {

});

// test("should create an addExpense Action with default value",()=>{
//     expect(addExpense()).toEqual({
//         type:"ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             description:"",
//             note:"",
//             amount:0,
//             createdAt:0
//         }
//     })
// });