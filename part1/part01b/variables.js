const x = 1;
let y = 5;

console.log(x, y);
y += 10;
console.log(x, y);
y = "Some text";

console.log(x, y)

x = 4; // causes an error since it is a const var.