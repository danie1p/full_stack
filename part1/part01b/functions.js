// Arrow Functions
const sum = (p1, p2) => {

    console.log(p1);
    console.log(p2);

    return p1 + p2;

};

const result = sum(1, 5);
console.log(result);

// If there is just a single parameter, we can exclude the parentheses from the definition

const square = p => {

    console.log(p)
    return p * p

}

console.log(square(10));

// If the function only contains a single expression then the braces are not needed. 
// In this case, the function only returns the result of its only expression.
//  Now, if we remove console printing, we can further shorten 
// the function definition:

const square2 = p => p * p;
console.log(square2(7))


// Old way to create a function

function product(a, b) {

    return a * b

}

const result2 = product(2, 6) // result is now 12.

console.log(result2);

// The other way to define the function is by using a function expression. 
// In this case, there is no need to give the function a name and 
// the definition may reside among the rest of the code:

const average = function(a, b) {

    return (a + b) / 2;

}

const result3 = average(2, 5)

console.log(result3)