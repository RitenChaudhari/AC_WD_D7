let btn = document.querySelector('button');
let h3 = document.querySelector('h3');
let div = document.querySelector('div');

btn.addEventListener('click',function (){
    let randomColor = getRandomColor();
    h3.innerText = randomColor;
    div.style.backgroundColor = randomColor;
});

function getRandomColor(){
    let r = Math.floor(Math.random()*255);
    let g = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);

    let color = `rgb(${r},${g},${b})`;
    return color;
}