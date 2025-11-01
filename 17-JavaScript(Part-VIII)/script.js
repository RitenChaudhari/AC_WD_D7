let arr = [10,20,30,40];

// arr.forEach(function(el){
//     console.log(el)
// });

arr.forEach((el) =>{
    console.log(el);
})

console.log("--------------------");
// let arr1 = arr.map(function(num){
//     console.log(num*num);
// });
let arr1 = arr.map((el) =>{
    console.log(el*el);
})

console.log("--------------------");
let ar2 = [1,3,4,8,9,6];

let ar3 = ar2.filter((num) =>{
    return num%2 == 0;
});

console.log("--------------------");

let finalVal = [1,2,3,4].reduce((acc,el) => (acc*el));
console.log(finalVal);

console.log("-------------------");

let arrr = [1,7,3,4,9,2,4];

let maxNum = arrr.reduce((max,el) =>{
    if(max < el){
        return el;
    }else{
        return max;
    }
});

console.log("-------------------");

let Qarr = [10,20,30,4,50,70,20];

// Qarr.every(function (n){
//     return n%10 == 0;
// });

console.log("-------------------");

function getMin(Qarr){
    let minNum = Qarr.reduce((res,el) => {
        if(res > el){
            return el;
        }else{
            return res;
        }
    });

    return minNum;
}

const data = {
    email:"Ironman@gmail.com",
    password:"abcd",
};

const dataCopy = {...data,id:123,country:"Liechtenstein"};

console.log("-----------------------");

console.log("REST function");

function sum(){
    console.log(arguments);
    console.log(arguments.length);
    //console.log(arguments.push(1));
}

function sum1(...args){
    console.log(args);
    console.log(args.length);
    let s = args.reduce((acc,el) => (acc+el));
    console.log(s);
}

console.log("-----------------------");
console.log("Destructuring");

let names=['Arthur','John','Dutch','Micah','Javier','Bill'];
let [rdr2,rdr1] = names;

console.log("----------------------");
console.log("Destructing for Objects");

let student = {
    name:"Riten",
    rollno:15,
    city:"Ahmedabad",
    degree:"PGP",
    college:"IIMA",
    username:"riten@123",
    password:"Rc07",
}

let {username:user,password:secret} = student;

