//Q1.Square and sum the array elements using the arrow function and then find the average of the array.

let arr = [1,2,3,4,5];

let squSum = arr.reduce((res,ele)=>{
    res = res + (ele*ele);

    return res;
});

console.log(squSum);

//Q2
console.log("---Q2---");
let addFive = arr.map((ele)=>(ele+5));
console.log(addFive);

//Q3
console.log("---Q3---");

let strArr = ['tony','peter','bruce'];

console.log(strArr.map((string) => string.toUpperCase()));

//Q4
console.log("---Q4---");

function doubleAndReturnArgs(arr,...args){
   return [...arr,...args.map((v) => v*2),];
}

//Q5
console.log("---Q5---");

function mergeObjects(obj1,obj2){
    return {...obj1,...obj2};
}