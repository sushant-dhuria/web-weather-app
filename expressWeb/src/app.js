const express=require("express");
const app=express();
const path=require('path');
const port=8000;
app.set('view engine','hbs');
app.use(express.static(path.join(__dirname,"../views")));

app.get("",(req,res)=>{
res.render('index');
})

app.get("/about",(req,res)=>{
  res.render('about')
    })

    app.get("/weather",(req,res)=>{
        res.render('weather');
        })
        app.get("*",(req,res)=>{
            res.send("oops");
            })

app.listen(port,()=>{
    console.log("listening");
});