const express = require("express");
const path = require("path");
const hbs = require('hbs');
const app = express();
const port = process.env.PORT  || 3000;

 

const spath = path.join(__dirname,'../public');
app.set("view engine" , "hbs");
app.use(express.static(spath));

// register partials 
const parpath = path.join(__dirname,'../partials');
hbs.registerPartials(parpath);

// render hbs files 
app.get("/" , (req,res) => {
    res.render('index',
    {
        aman:"small pp"
    });
});
app.get("/about",(req,res) => {
    res.render('about');
});
app.get('/santa', (req,res) => {
    res.render('santa');
}); 
app.get('/weather' , (req,res) => {
    res.render('weather');
});
app.get("*" , (req,res)=> {
    res.send("404 error page");
})

app.get("/" , (req,res) => {
    res.send("we are ready to make a express project");
});
 
app.listen(port , (e) => {
    console.log(`port is running on ${port}`);
});