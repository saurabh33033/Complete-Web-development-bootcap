console.log('We are in tut7.js and we going to discuss about arrays and objects');
let marks = [34,57,40,84,85,58,];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 58, [34, 68]];

let arr = new Array (48, 84, 'Orange', 894);
// console.log(marks);
// console.log(marks);
// console.log(fruits[1]);
// console.log(mixed);

// console.log(arr.length);
// console.log(Array.isArray(arr1));

arr[0] = 'Saurabh';
let arr0 = arr[0];
// console.log('element:', arr0)
// console.log(arr);

let value = marks.indexOf(84);
// console.log(value);

//Mutating or Modifying arrays
// marks.push(43);
// marks.unshift(849);
// marks.pop();
marks.shift();
// marks.splice(2, 3);
// marks.reverse();
// let marks2 = [1, 2, 3, 4];
// marks = marks.concat(marks2);
console.log(marks);

let myobj = {
    name: 'Saurabh',
    channel: 'TrapKiller',
    isActive: true,
    marks: [1,2,3,4,5,8]
};
console.log(myobj);
console.log(myobj.channel);
console.log(myobj['channel'])