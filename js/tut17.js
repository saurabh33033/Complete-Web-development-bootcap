console.log('This is tutorial 17 on event');
document.getElementById('heading').addEventListener('click', function (e) {
    console.log('You have clicked Heading');
    //    location.href = '//google.com';
    let variable;
    variable = e;
    variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
    variable = e.target.id;
    variable = e.offsetX;
    variable = e.offsetY;
    variable = e.clientX;
    variable = e.clientY;
    console.log(variable);
});