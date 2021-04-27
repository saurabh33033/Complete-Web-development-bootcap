console.log('This is tutorial 16');
let element = document.createElement('li');

//Adding a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'myTitle');
// element.innerText = 'Hello World';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
let text = document.createTextNode('This is text Note');
element.appendChild(text);

// console.log(ul);
// console.log(element);

let elem2 = document.createElement('h3');
elem2.id = 'elem2';
elem2.className = 'elem2';
let tnode = document.createTextNode('This is text node created for elem2');
elem2.appendChild(tnode);

element.replaceWith(elem2);

let myul = document.getElementById('myul');
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('lui'));

// let pr = elem2.getAttribute('class');
let pr = elem2.hasAttribute('class');
elem2.removeAttribute('id')
console.log(elem2, pr)
