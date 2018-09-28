import expenseTotal from '../../selectors/expense-total';

const expensesTestData = [
    { id: 1, description: 'Gum', note: '', amount: 195 },
    { id: 2, description: 'Rent', note: 'August rent', amount: 299500 },
    { id: 3, description: 'food', note: 'yesterday dinnet', amount: 5000 },
    { id: 4, description: 'gasoline', note: '', amount: 2400 }
];

test('should return the total amount of multiple expenses', () => {
    const total = expenseTotal(expensesTestData);
    expect(total).toBe(307095);
});

test('should return 0 if no expense', () => {
    const total = expenseTotal([]);
    expect(total).toBe(0);
});

test('should return correct number for one expense', () => {
    const total = expenseTotal([{ id: 1, description: 'Gum', note: '', amount: 195 }]);
    expect(total).toBe(195);
});

