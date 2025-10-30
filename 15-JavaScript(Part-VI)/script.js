function printPoem(){
    console.log("Ba Ba Black Sheep");
    console.log("Yes Sir Yes Sir 3 pack full");
}

function rollDice(){
    let rollFD = Math.floor(Math.random()*6)+1;
    console.log(rollFD);
}

function printName(name){
    console.log(name);
}

function avgNum(num1,num2,num3){
    console.log((num1+num2+num3)/3);
}

function printNum(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum += i;
    }

    return sum;
}

printPoem();
rollDice();
