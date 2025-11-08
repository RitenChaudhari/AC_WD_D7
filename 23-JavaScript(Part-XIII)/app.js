let btn = document.querySelector("button");
// btn.addEventListener("click",async () => {
    
//     let fact = await getFact();
//     let p = document.querySelector("#catFact");
//     p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFact(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch(e){
//         console.log("error- ",e);
//         return "No fact Found!";
//     }   
// }

// Dog Image: 

let url2 = "https://dog.ceo/api/breeds/image/random";
btn.addEventListener("click",async () => {
    
    let link = await getImage();
    let img = document.querySelector("img");
    img.setAttribute("src",link);
});

let url = "https://catfact.ninja/fact";

async function getImage(){
    try{
        let res = await axios.get(url2);
       return res.data.message;
    }catch(e){
        console.log("error- ",e);
        return "/";
    }   
}