console.log('We are at tutorial 9');

//General Loops: for, while, do while
// let a = 34;
// a+=3;
// a++;
// console.log(a);

// for(let i=0; i<100; i++)
// {
//     console.log(i);
// }

// let j = 0;
// while(j<10){
//     console.log(j)
//     j++
// }

// let k = 0;
// do {
//     console.log(k + 1);
//     if(k===5){
//         break;
//     }
//     k+=1;
// } while (k<10);
// console.log('done')

// let k = 0;
// do {
//     if(k===5){
//         k +=1;
//         continue;
//     }
//     console.log(k + 1);
//     k+=1;
// } while (k<10);

// console.log('done')

let arr1 = [1, 2, 3, 4, 5, 6, 7];
// for (let i = 0; i < arr1.length; i++) {
//     // const element = arr1[i];
//     console.log(arr1[i]);
// }

// arr1.forEach(function (element, index, array) {
//     console.log(element, index, array)
// })

let obj = {
    name: "Rohan Das",
    age: 34,
    type: "Dangerous programmer",
    OS: "Ubuntu"
}

for(let key in obj)
{
    console.log(`The ${key} of object is ${obj[key]}`)
}