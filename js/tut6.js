console.log("We are at tut6");
const name = "Saurabh";
const greeting = "Good Morning";
console.log(greeting + " " + name)

let html;
html = "<h1>This is a heading</h1>" + 
    "<p>This is my para</p>";
html = html.concat(' This ', "str2" );

console.log(html);
// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase());

// console.log(html.indexOf(">"));
// console.log(html.lastIndexOf(">"));
// console.log(html.charAt(4));

// console.log(html.endsWith("r2"));
// console.log(html.includes("eashfg"));
// console.log(html.substring(2, 9));
// console.log(html.slice(-4));
// console.log(html.split(" "));
console.log(html.replace("This", "that"));

let fruit1 = "Orange\"";
let fruit2 = "Apple";
let myHtml = `Hello ${name}
            <h1>This is heading</h1>
            <p>You may like ${fruit1} and
            ${fruit2}
`;

document.body.innerHTML = myHtml;

//Min Quiz
let quiz = 'string';
let aHtml = `<p>This is the quiz with template literal and quiz is '${quiz}'</p>`;
document.body.innerHTML =aHtml;