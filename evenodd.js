//Let's Start
function checkOddEven(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Example 
let number = 8;
console.log(`${number} is ${checkOddEven(number)}.`);
