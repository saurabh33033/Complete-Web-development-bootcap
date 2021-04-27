console.log('Welcome to quickQuiz 1');

// Creating Element 'h1'
let element = document.createElement('h1');
element.className = 'heading';

// Creating Element 'a'
let anText = document.createElement('a');
anText.setAttribute('href', 'https://www.technical-hat.com');
anText.innerText = 'Go to Technical-hat.com';

element.appendChild(anText);
document.body.appendChild(element);

// Loging Element
console.log(element);

// !-----Ended of quiz 1 -----! \\