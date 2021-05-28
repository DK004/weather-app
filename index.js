const express = require("express");

const app = express();

const port = process.env.PORT || 8000;

const hbs = require("hbs");

app.set("view engine","hbs");
app.set('views',"templates/views")
hbs.registerPartials("templates/partials");


app.use(express.static("public"));

// main routing
app.get("/",(req, res)=>{
    res.render('index');
    // res.send("welcome to homepage.");
});

app.get("/about",(req, res)=>{
    // res.send("welcome to ABOUT page.");
    res.render('about');
});

app.get("/weather",(req, res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("error",{
        errMsg:"Page Not Found! Please Go back.",
    });
})










app.listen(port, ()=> {
    console.log("Server running on "+port);
})