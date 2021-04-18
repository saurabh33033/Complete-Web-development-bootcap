// console.log('Quiz 1');
var str = 'hacker';
let link = document.links;
Array.from(link).forEach(function(element){
    if(element.href.includes(str)){
    }
    else{
        console.log(element.href)
    }
});