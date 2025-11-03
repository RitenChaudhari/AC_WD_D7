// let btns = document.querySelectorAll('button');

// for (btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function(){
    //     console.log("You entered a button");
    // }

//     //btn.addEventListener("click",sayHello);
//     btn.addEventListener("dblclick",function () {
//         console.log("Apna College");
//     });
// }

// function sayHello(){
//     console.log('Hello');
// }

// let btn = document.querySelector('button');

// btn.addEventListener('click',function (){
//     console.log(this.innerHTML);
// });

// function changeColor(){
//     this.style.backgroundColor = 'yellowgreen';
//     this.style.color = "white";
// }
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');

// h1.addEventListener('click',changeColor);
// h3.addEventListener('click',changeColor);
// btn.addEventListener('click',changeColor);

//let btn = document.querySelector('button');
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("Btn was pressed");
// });

//btn.addEventListener('dblclick',function(){
    //console.log(event);
//});

// let inp = document.querySelector('input');

// inp.addEventListener("keydown",function(event){
//     console.log(event.code);
//     console.log(event.key);
// });

// let inp = document.querySelector('input');

// inp.addEventListener('keydown',function() {
//     console.log("code =",event.code);
//     if(event.code == "KeyW"){
//         console.log("Character Moves up");
//     }else if(event.code == "KeyS"){
//         console.log("Character Moves Down");
//     }else if(event.code == "KeyA"){
//         console.log("Character Moves Left");
//     }else if(event.code == "KeyD"){
//         console.log("Character Moves Right");
//     }else{
//         console.log("Character isnt moving");
//     }
// });

// let form = document.querySelector('form');
// form.addEventListener('submit',function (event) {
//     event.preventDefault();

//     let user = this.elements[0];
//     let pass = this.elements[1]; 
//     console.log(`Hi ${user.value},Your password is: ${pass.value}`);
// });

let form = document.querySelector('form');
form.addEventListener('submit',function (){
    event.preventDefault();
});

let user = document.querySelector('#user');

user.addEventListener("change",function (){
    console.log("change event");
    console.log("final value = ",this.value);
});

user.addEventListener('input',function(){
    console.log("input event");
    console.log("final event: ",this.value);
});