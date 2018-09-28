import {setStartDate,setEndDate,sortByDate,setTextFilter,sortByAmount} from '../../actions/filters';
import moment from 'moment';

test("should set the text for filter expenses",()=>{
    expect(setTextFilter("salam")).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'salam'
    });
});

test("should set the text for filter expenses with default value",()=>{
    expect(setTextFilter()).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test("should set SortByDate",()=>{
    expect(sortByDate()).toEqual({
        type: 'SORT_BY_DATE',
    });
});

test("should set Sort By Amount",()=>{
    expect(sortByAmount()).toEqual({
        type: 'SORT_BY_AMOUNT',
    });
});

test("should set Start date",()=>{
    expect(setStartDate(moment(1))).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(1)
    });
});

test("should set End date",()=>{
    expect(setEndDate(moment(1))).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1)
    });
});
