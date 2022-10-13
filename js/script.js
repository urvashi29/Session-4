//let 
// let x = 20;

// var vs let
//let allow to declare variable within the block scope 
// var x = 20;
// {
//     //block scope
//     var x = 30;
//     console.log(x);//30
// }

// console.log(x);//30

var x = 20;
{
    //block scope
    let x = 30;
    x = 40;
    console.log(x);//30
}

console.log(x);//20

//can't re-declare the variable with the same name
// let x = 20;

//hoisting
// z = 20
// console.log(z);

// let z;


// const
var num = 30;
{
    const num = 40;
    //num = 50;//gives error
    console.log(num);//40
}

console.log(num);//30

//const define constant reference, not the value
const arr = [89, 79, 66, 56];
// arr = [90, 67, 55];//gives error
arr[1] = 100;
console.log(arr);

//Can't re-declare the variable with the same name
// const num = 30;

//hoisting
// numTwo = 20
// console.log(z);

// const numTwo;


//Arrow Function/Fat arrow: shorter syntax 
// 1. Syntax

function add() {
    console.log(10 + 20);
}

add();

addVal = () => {
    console.log(10 + 20);
}

addVal();

// 2. this keyword
function display() {
    console.log(this);//window
}
display();

displayName = (name) => {
    console.log(this);//window
    console.log(name);
}
displayName('alina');

var person = {
    lastName: 'alina',
    name: function () {
        console.log(this);//person
    },
    contact: {

    },
    data: () => {
        console.log(this);//window
    }
}

person.name();
person.data();

var obj = Object.create(person);

// 3. Return Keyword
function subtract() {
    return 20;
}

let s = subtract();
console.log(s);

//
subtractVal = (a, b) => a - b;

let r = subtractVal(20, 10);
console.log(r);


// Array Helper Functions
//map
const arrVal = [90, 78, 56, 45, 100];

// var arrMultiply = [];
// for (var i = 0; i < arrVal.length; i++) {
//     arrMultiply.push(arrVal[i] * 2);
// }
// console.log(arrMultiply);


//takes callback function
// arrVal.map(function () {

// });

let u = arrVal[2];
console.log('VALUE', u);

//return an array
const mapArray = arrVal.map((e, i, a) => {
    console.log(e);//array element
    console.log(i);//array index
    console.log(a);//array
    return e * 2;
});

console.log(mapArray);

//filter
//return an array filled with values that pass the test
const filterArray = arrVal.filter(e => {
    return e > 60;
});

// arrVal.filter(e =>  e > 60 )
console.log(filterArray);


//forEach
arrVal.forEach((ele, index, arr) => {
    console.log(ele);
});


//find
//return first element that pass the test
const findVal = arrVal.find((ele) => {
    return ele > 60;
});

console.log(findVal);

//some
//return a boolean value
//If one and more than that element pass the test, then it return true
const someVal = arrVal.some(e => {
    return e <= 45;
});

console.log(someVal);


//every
//return a boolean value
//If all the element pass the test, then it return true
const everyVal = arrVal.every(e => {
    return e <= 45;
});

console.log(everyVal);


//reduce
//reduce array to a single value
// [90, 78, 56, 45, 100]
let reduceVal = arrVal.reduce((t, n) => {
    // console.log(t);// 90
    // console.log(n);//78 56 45 100
    return t + n;
});

console.log(reduceVal);//

// ['a', 'b', 'c', 'd']: abcd

let arrayOfObject = [{
    name: '',
    age: 20
}, {

    age: 20
}, {
    name: '',
    age: 20
}]

//default function arguments
multiply = (a, b = 20) => {
    return a * b;//
}

let resultVal = multiply(10, 40);
console.log(resultVal);







