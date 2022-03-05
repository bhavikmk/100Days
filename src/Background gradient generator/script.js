var color1 = document.querySelector('.colorPicker1');
var color2 = document.querySelector('.colorPicker2');
var body = document.getElementById('body');

function setGradient (){
    body.style.background = `linear-gradient(to right,${color1.value},${color2.value})`;
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);