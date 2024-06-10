const object1 = {

    name: "Marlon D.",
    age: 29,
    education: "High School",

}

const object2 = {

    name: "Full Stack web application development",
    level: "Intermediate students",
    size: 5,

}

object3 = {

    name: {

        first: 'Dan',
        last: 'Abramove',

    },

    grade: [2, 3, 5, 3],
    department : 'Standford University',

}

// The values of the propertues can be of any type like integers, stringsm arratsm objects ...

// The properties of an object are referencee by uwint 'dot' notation, or by using bracketw;

console.log(object1.name)
const fieldName = 'age'
console.log(object1[fieldName])

// You can also add properties to an object on the fly by using either dot notation
// or brackets.
object1.address = 'San Salvador';
object1['secret number'] = 12341;


console.log(object1);