//Let's Start
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// For Example 
const value = 9;
console.log(`Factorial of ${value} is ${factorial(value)}`);
