import React from 'react';
import { connect } from 'react-redux';
import { sortByAmount, sortByDate, setStartDate, setEndDate, setTextFilter } from "../actions/filters";
import { DateRangePicker } from 'react-dates';

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSelectChange = (e) => {
        (e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount());
    };

    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input className="text-input" placeholder="Search expenses" type="text" value={this.props.filters.text} onChange={this.onTextChange} />
                    </div>
                    <div className="input-group__item">
                        <select
                            className="select"
                            value={this.props.filters.sortBy}
                            onChange={this.onSelectChange}
                        >
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker
                            startDate={this.props.filters.startDate}
                            startDateId={"123"}
                            endDate={this.props.filters.endDate}
                            endDateId={"321"}
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused}
                            onFocusChange={this.onFocusChange}
                            //options
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>



            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return ({
        filters: state.filters
    });
};

const mapDispatchToProps = (dispatch, props) => ({
    setTextFilter: (data) => (dispatch(setTextFilter(data))),
    setStartDate: (startDate) => (dispatch(setStartDate(startDate))),
    setEndDate: (endDate) => (dispatch(setEndDate(endDate))),
    sortByDate: () => (dispatch(sortByDate())),
    sortByAmount: () => (dispatch(sortByAmount()))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);