const express = require("express");
const app = express();

console.dir(app);

const port = 3000;
app.listen(port,() =>{
    // console.log(`App is listening on port: ${port}`);
});

// app.use((req,res)=>{
//     console.log("request received!");
//     res.send({'name': 'apple',
//                'color': 'red'});
// })

// app.get("/",(req,res) =>{
//     res.send("you contacted root path.");
// });

// app.get("/apple",(req,res) =>{
//     res.send("you contacted apple path.");
// });

// app.get("/banana",(req,res)=>{
//     res.send("You contacted banana path.");
// });

// app.get("/pineapple",(req,res)=>{
//     res.send("You contacted pineapple path.");
// });

// app.get('/:params',(req,res) => {
//     console.log(req.params);
// });

// app.post("/",(req,res) =>{
//     res.send("You send a request to the root.");
// })

// app.get("/:username/:id",(req,res)=>{
//     let {username,id} = req.params;
//     res.send(`Welcome to the page @${username}.`);
// });

app.get("/search",(req,res) => {
    let {q} = req.query;
    if (!q){
        res.send("<h1>Nothing to Show here </h1>");
    }else{
        res.send(`<h1>Show Results for: ${q}</h1>`);
    }
});