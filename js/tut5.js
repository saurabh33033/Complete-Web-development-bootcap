// Type of conversion and Type coercion

//Type Conversion

console.log("Welcome to tut5");
let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr1 = String([1,2,3,4,5]);
console.log(arr1, (typeof arr1));

console.clear() // to clear all before console.log

let i = 75;
// console.log(i.toString());

let stri = Number("8448");
stri = Number(true);
console.log(stri, (typeof stri));

let num = parseInt("84.759");
num = parseFloat("84.759");
console.log(num.toFixed(2), (typeof num));

//Type Coercion

let mystr = Number("698");
let mynum = 34;
console.log(mystr + mynum)