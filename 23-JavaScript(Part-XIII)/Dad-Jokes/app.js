let url = "https://icanhazdadjoke.com/";

let btn = document.querySelector("button");
btn.addEventListener("click",async ()=>{
    let p = document.querySelector("#dadJoke");
    let dadJoke = await getJoke();
    p.innerText = dadJoke; 

    btn.innerText = "Another One!";
})

async function getJoke(){
    const header = {headers: {Accept: "text/plain"}};
    let jokes = await axios.get(url,header);
    return jokes.data;
}