//Q1
let input = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = "Click Me!";

let body = document.querySelector('body');
body.append(input);
body.insertAdjacentElement("afterend",btn);

//Q2
input.setAttribute('placeholder','username');
btn.setAttribute('id','btn');

//Q3
let butt = document.querySelector('#btn');
butt.style.backgroundColor = "blue";
butt.style.color='white';

//Q4
let h1 = document.createElement('h1');
h1.innerHTML = "<u>DOM Practice</u>";
body.prepend(h1);
h1.style.color = "purple";
// h1.classList.add('underline');

//Q5
let p =document.createElement('p');
p.innerHTML = "Apna College <b>Delta</b> Practice";
body.append(p);
//let span = document.querySelector('span');
//span.classList.add('bold');
