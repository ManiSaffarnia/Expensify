import moment from 'moment';
export default [
    { id: 1, description: 'Gum', note: '', amount: 195, createdAt: 0 },
    { id: 2, description: 'Rent', note: 'August rent', amount: 299500, createdAt: moment(0).subtract(4, 'days').valueOf() },
    { id: 3, description: 'food', note: 'yesterday dinnet', amount: 5000, createdAt: moment(0).add(4, 'days').valueOf() }
];