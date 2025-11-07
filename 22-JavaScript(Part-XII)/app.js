// async function greet(){
//     throw "Error 404 Not Found";
//     return "Hello";
// }

// greet()
//  .then((result)=>{
//     console.log("promise was resolved");
//     console.log("result was: ",result);
//  })
//  .catch((err)=>{
//     console.log("Promise was rejected with err: ",err);
//  });

//  let demo = async() =>{
//     return 5;
//  };

//Change Color:

// let h1 = document.querySelector('h1');

// function changeColor(color,delay){
//    return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//          let num = Math.floor(Math.random()*5)+1;
//          if(num>3){
//             reject("Promise Rejected!");
//          }
//          h1.style.color = color;
//          console.log(`Color changed to ${color}!`);
//          resolve("Color Changed");
//       },delay);
//    });
// }

// async function demo(){
//    try{
//       await changeColor("red",1000);
//       await changeColor("orange",1000);
//       await changeColor("green",1000);
//       await changeColor("blue",1000);
//    }catch(err){
//       console.log("Error caught");
//       console.log(err);
//    }
   
// }

// demo();

// let Apires = '{"count":21,"name":"meelad","age":35}';

// let JSONres = JSON.parse(Apires);

// let createAPI = {"Movie":"Pulp Fiction",
//                   "Director":"Quentin Tarentino",
//                   "Cast":"Samuel Jackson,John Travolta,Uma Thurman"
//                };
// let createJSON = JSON.stringify(createAPI);

let url = "https://catfact.ninja/fact";

// fetch(url)
//  .then((res)=>{
//    return res.json(); //this function transforms the data into readable format.
//  })
//  .then((data)=>{
//    console.log("data1 = ",data.fact);
//    return fetch(url);
//  })
//  .then((res)=>{
//    return res.json();
//  })
//  .then((data2)=>{
//    console.log("data2 = ",data2.fact);
//  })
//  .catch((err)=>{
//    console.log("ERROR-",err);
//  })

async function getFacts(){
   try{
      let res = await fetch(url);
      let data = await res.json();
      console.log(data.fact);

      let res2 = await fetch(url);
      let data2 = await res2.json();
      console.log(data2.fact);
   }catch(e){
      console.log("Error - ",e);
   }

   console.log("Bye");
}