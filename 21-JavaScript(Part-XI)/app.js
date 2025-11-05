// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans = two()+one();
//     console.log(ans);
// }

// three();

// let h1 = document.querySelector('h1');

// function changeColor(color,delay,nextColorChange){
//     setTimeout(() =>{
//         h1.style.color =  color;
//         if(nextColorChange) nextColorChange();
//     },delay);
// }

//IMPROVED VERSION OF ABOVE CODE:

let h1 = document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() =>{
        h1.style.color =  color;
        resolve("Color was changed");
    },delay);
    }); 
}

changeColor("red",1000)
 .then(()=>{
    console.log("red color was completed");
    return changeColor("orange",1000);
 })
 .then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000);
 })
 .then(()=>{
    console.log("green was completed");
 });

//During actual production,this kind of code is used.
// changeColor("red",1000,() =>{
//     changeColor("blue",1000,()=>{
//         changeColor("orange",1000,()=>{
//             changeColor("yellowgreen",1000,()=>{
//                 changeColor("green",1000);
//             });
//         });
//     });
// });

// function saveTodb(data,success,failure){
//     let internetSpeed = Math.floor(Math.random()*10);
//     if(internetSpeed > 4){
//         success(data);
//     }else{
//         failure();
//     }
// }

// saveTodb(
//     "apna college",
//     ()=>{
//         console.log("Success: your data was saved");
//         saveTodb(
//             "Hello World",
//             ()=>{
//                 console.log("Success2: your data is saved");
//                 saveTodb(
//                     "Riten IIMA",
//                     ()=>{
//                         console.log("Success3:Your data is saved");
//                     },
//                     ()=>{
//                         console.log("Failure3:Fail to save the data");
//                     }
//                 );
//             },
//             ()=>{
//                 console.log("Failure2: your data isnt saved");
//             }
//         );
//     },
//     ()=>{
//         console.log("Failure1: Your data was not saved");
//     }
// );


// function savetodb(data){
//     return new Promise((resolve,reject) =>{
//         let internetSpeed = Math.floor(Math.random()*10)+1;
//         if(internetSpeed > 4){
//             resolve("Success: Data was Saved");
//         }else{
//             reject("Failure: Weak Connection.");
//         }
//     });
// }

// savetodb("Hello World")
//  .then((resolve)=>{
//     console.log("Data1 was Saved");
//     console.log("result of promise: ",resolve);
//     return savetodb("Hello");
//  })
//  .then((resolve)=>{
//     console.log("Data2 was Saved");
//     console.log("result of promise: ",resolve);
//     return savetodb("Hell Nah");
//  })
//  .then((resolve)=>{
//     console.log("Data3 was Saved");
//     console.log(resolve);
//     return savetodb("result of promise: ","What the helllll");
//  })
//  .catch((error)=>{
//     console.log("Data was not stored");
//     console.log("result of error: ",error);
//  })




