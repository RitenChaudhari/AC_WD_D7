let arr = [7,9,0,-2];
console.log(arr.slice(0,3));
console.log(arr.slice(arr.length-3));

let astr = "";
if(astr.length == 0){
    console.log("Empty");
}else{
    console.log("Not Empty");
}

let bstr = "   amao  ";
console.log(bstr.trim());

if(arr.includes(-1)){
    console.log("Exists");
}else{
    console.log("Does not Exist");
}