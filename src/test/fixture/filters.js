import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const altFilters = {
    text: 'rent',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment().subtract(4, 'days')
};

export { filters, altFilters };