//Print All Odd Numbers

// for(let i=15;i>=1;i=i-2){
//     console.log(i);
// }

//Print All Even Numbers

// for(let i=0;i<=16;i=i+2){
//     console.log(i);
// }

//Print the Multiplication table for 5

// let n = prompt("Enter Number: ");
// n = parseInt(n);

// for(let i=n;i<=n*10;i=i+n){
//     console.log(i);
// }


let todo = [];
let req = prompt("Enter : ")

while(true){
    if(req == "quit"){
        console.log("Quitting App");
        break;
    }

    if(req == "list"){
        for(let i = 0; i<todo.length;i++){
            console.log(i,todo[i]);
        }
    }else if(req == "add"){
        let addtask = prompt("Add Task: ");
        todo.push(addtask);
    }else if(req == "delete"){
        let deltask = prompt("Enter the idx of Task to be deleted: ");
        todo.splice(deltask,1);
    }

    req = prompt("Enter");
}