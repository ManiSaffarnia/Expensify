import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import {editExpense,startRemoveExpense} from "../actions/expenses";

const EditExpensePage = (props) => {
    return (
        <div>
            <h1>Edit Expense id {props.match.params.id}</h1>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense)=>{
                props.dispatch(editExpense(props.expense.id,expense));
                props.history.push("/");
            }}/>
            <button onClick={(e)=>{
                props.dispatch(startRemoveExpense(props.expense));
                props.history.push("/");
            }}>Remove</button>
        </div>
    );
};

const mapStateToProps = (state, props) =>{
    return {
        expense: state.expenses.find((expense)=>{
            if(expense.id === props.match.params.id){
                return true;
            }
        })
    }
};

export default connect(mapStateToProps)(EditExpensePage);