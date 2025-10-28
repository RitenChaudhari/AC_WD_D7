console.log("--------------Q1--------------");

// let arr=[1,2,3,4,5,6,2,3];
// let num = 2;

// for(let i=0;i<arr.length;i++){
//     if(arr[i] == num){
//         arr.pop(i);
//     }
//     continue;
// }

// console.log(arr);

console.log("--------------Q2--------------");

let number=287152;
let count = 0;
while(number != 0){
    count = count +1;
    number = number/10;
}

console.log(count);