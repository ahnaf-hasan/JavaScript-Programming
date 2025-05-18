//Let's Start

function calculateTax(income, expense) {
    if (income < 0 || expense < 0 || income < expense) {
        return "Invalid Input";
    }
    let tax = (income - expense) * 0.10;
    return tax;
}

let income = 1200000;  // Income value here
let expense = 700000; // Expense value here

//Result

let result = calculateTax(income, expense);
console.log(`Income: ${income}, Expense: ${expense}, Calculated Tax: ${result}`);
