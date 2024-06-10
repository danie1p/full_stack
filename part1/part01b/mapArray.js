const t = [1, 2, 3];

const m1 = t.map(value => value *2);
console.log(m1); // [2, 4, 6] is printed
// Based on the old array, map creates a new array, 
// for which the function given as a parameter is used to create the items.
//  In the case of this example, the original value is multiplied by two.

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2); // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed