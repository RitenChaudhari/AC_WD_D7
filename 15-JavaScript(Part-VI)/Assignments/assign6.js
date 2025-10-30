console.log("-----------Q1-----------");

let arr = [5,3,6,9,7,4];

function LargerinArray(arr){
    let largeNum = arr[0];
    for(let i=1;i<arr.length-1;i++){
        if(arr[i] > largeNum){
            largeNum = arr[i];
        }
    }

    return largeNum;
}

console.log(LargerinArray(arr));

//console.log("-----------Q2-----------");

// let str = "abcdabcdefgggh";

// let str1 = "";



// console.log(str1);

console.log("-------------Q3------------");

let country = [];

let n = 3;

while(n > 0){
    let npro = prompt("Enter Country Name: ");
    country.push(npro);
    n = n-1;
}

let idx = 0;
for(let i=0;i<n;i++){
    let countLen = country[0].length;
    if(countLen < country[i].length){
        idx = i;
    }
}

console.log(country[idx]);
