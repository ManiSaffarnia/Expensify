
const totalExpense = (filteredExpense) => {
    let total = 0;
    if (filteredExpense.length > 0) {
        filteredExpense.forEach(expense => {
            total = expense.amount + total;
        });
    }
    return total;
};

export default totalExpense;