//Node Modules
const express = require("express");
const ejs = require("ejs");

//Create Express Object
const app = new express();

//Set up static files directory
app.use(express.static("public"));

//Use ejs for views
app.set("view engine", "ejs");

//have app listen on port specified by Heroku, default on port 4000
let port = process.env.PORT;
if (port == null || port == "") {
  port = 4000;
}

app.listen(port, ()=>{
  console.log('App listening...')
})

//Main Router
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/projects/songtrace", (req, res) => {
  res.render("songtrace");
});

app.get("/projects/boozallen", (req, res) => {
  res.render("boozallen");
});

app.get("/projects/itpm", (req, res) => {
  res.render("itpm");
});

app.get("/projects/yourflix", (req, res) => {
  res.render("yourflix");
});

app.get("/projects/pathfinding", (req, res) => {
  res.render("pathfinding");
});

app.get("/projects/picamera", (req, res) => {
  res.render("picamera");
});

//Default View - Not Found Page
app.get("*", (req, res) => {
  res.render("notfound");
});
