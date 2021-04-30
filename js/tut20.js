console.log('We are at tutorial 20');

let imparray = ['adrak', 'pyaz', 'bhindi'];

localStorage.setItem('Sabzi', JSON.stringify(imparray));
localStorage.setItem('Name', 'Saurabh');
localStorage.setItem('Name2', 'Rohan');
// localStorage.clear();
// localStorage.removeItem('Name2');

let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem("Sabzi"));
console.log(name);

sessionStorage.setItem('sessionSabzi', JSON.stringify(imparray));
sessionStorage.setItem('sessionName', 'sSaurabh');
sessionStorage.setItem('sessionName2', 'sRohan');