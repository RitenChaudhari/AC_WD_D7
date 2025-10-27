let start = ['january','july','march','august'];

start.shift();
start.shift();
start.unshift("june");
start.unshift("july");


console.log("--------------Practice Qs 3-----------------");

let months = ['january','july','march','august'];

months.splice(0,2,"july","june");
//months.splice(1,0,'june');

console.log(months);

console.log("--------------Q4-----------");
let lang = ['c','c++','html','javascript','python','java','c#','sql'];
lang.reverse();
console.log(lang.indexOf('javascript'));
lang.reverse();

console.log("------------Practice Qs 4------------------");
let tictactoe = [['x',null,'o'],[null,'x',null],['o',null,'x']];

console.log(tictactoe[0]);
console.log(tictactoe[1]);
console.log(tictactoe[2]);

tictactoe[0][1] = 'o';

console.log("------------------------");

console.log(tictactoe[0]);
console.log(tictactoe[1]);
console.log(tictactoe[2]);