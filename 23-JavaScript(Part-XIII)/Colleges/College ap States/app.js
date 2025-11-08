let url = "http://universities.hipolabs.com/search?country=India";
let btn = document.querySelector("Button");

btn.addEventListener("click",async() =>{
    let stateInput = document.querySelector("input").value;
    console.log(stateInput);
    let state = await stateColleges(stateInput);
    document.querySelector(".stateColleges").innerHTML = '';
    show(state);
})

function show(state){
    let stateCollege = document.querySelector(".stateColleges");
    for (college of state){
        console.log(college.name);
        let li = document.createElement("li");
        li.innerText = college.name;
        stateCollege.appendChild(li);    
    }
}

async function stateColleges(stateInput){
    try{
        let filteredUrl = url + `&state-province=${encodeURIComponent(stateInput)}`;
        let res = await axios.get(filteredUrl);
        return res.data;
    }catch(err){
        console.log("Error-",err);
        return [];
    }
}