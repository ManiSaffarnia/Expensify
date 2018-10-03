import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';


export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            errorState: ''
        };
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
        else {
            console.log("doesn't match");
        }
    };

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };


    onSubmit = (e) => {
        if (!this.state.description || !this.state.amount) {
            //error ke khali nabashe field ha
            this.setState(() => ({ errorState: "Please provide description and amount" }))
        }
        else {
            this.setState(() => ({ errorState: '' }));
            //expense jadid vared shode ro barmigardoonim be bala
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
        e.preventDefault();
    };



    render() {
        return (
            <div className="content-container">
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.errorState && <p className="form__error" id="errorState">{this.state.errorState}</p>}
                    <input className="text-input" type="text" name="description" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                    <input className="text-input" type="text" name="amount" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea className="text-area" name="note" id="" cols="30" rows="10" placeholder="Add a note for yout expense (optional)" value={this.state.note} onChange={this.onNoteChange} />
                    <div>
                        <button className="button">Save Expense</button>
                    </div>
                </form>
            </div>
        )
    }
}