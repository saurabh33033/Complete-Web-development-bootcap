console.log('Welcome to tutorial 14');
/*
Types of Element Selector:-

1. Single element selector
2. Multi element selector

*/

let element = document.getElementById('myfirst');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
element.style.color = 'red';
element.innerText = 'Saurabh is a good boy';
element.innerHTML = '<strong>Saurabh is a good boy</strong>'
// console.log(element.innerText);

let sel = document.querySelector('#myfirst');
sel = document.querySelector('.child');
sel = document.querySelector('div');
sel.style.color = 'green';
// console.log(sel);

// 2. Multi element Selectors
let elems = document.getElementsByClassName('child');
elems = document.getElementsByClassName('container');
// console.log(elems[0].getElementsByClassName('child'));
elems = document.getElementsByTagName('div');
console.log(elems);

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'blue';
}

// Array.from(elems).forEach (element => {
//     console.log(element);
//     element.style.color = 'blue';
// });