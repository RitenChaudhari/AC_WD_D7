const arrayAverage = (arr) => {
    let avg = 0;
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum+arr[i];
        let total = arr.length;
        avg = sum/total;
    }
    console.log(avg);
}

const isEven = m =>{
    if(m%2 == 0){
        return true;
    }

    return false;
}

