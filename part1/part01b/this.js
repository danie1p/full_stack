// We can assign methods to an object by defining properties that are functions:

const arto = {

    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {

        console.log('Hello, my name is ' + this.name);

    },
    doAddition: function(a, b) {

        console.log(a + b)

    }

}

arto.greet() // "Hello, my name is Arto Hellas" gets printed.

// Methods can be assigned to objects even after the creation of the object:

arto.growOlder = function() {

    this.age += 1;

}

console.log(arto.age) // 35 is printed
arto.growOlder()
console.log(arto.age) // 36 is printed

arto.doAddition(1, 4); // 5 is printed

const referenceToAddition = arto.doAddition;
referenceToAddition(10, 15); // 25 is printed.

// There are several mechanisms by which the original this can be preserved. 
// One of these is using a method called bind:

setTimeout(arto.greet.bind(arto), 10);