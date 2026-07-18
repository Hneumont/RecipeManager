const express = require('express')
const ejs = require('ejs')
const fs = require('fs').promises;
const app = express();
const PORT = 5000;

// Config
app.set("view engine", "ejs")
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())

//Routes

// Home Page
app.get("/", (req, res) => {
  res.render("home")
})
// Home Page

// Search Page
app.get("/search", (req, res)=>{
  res.render("search")
})
// Search Page

// Recipe Form Page
app.get("/recipe", (req, res) => {
  res.render("recipe")
})

app.post("/recipe", (req, res) => {
  let body = req.body
  var isHeaderBlank = false

  if (body.header.trim() === '') isHeaderBlank = true;
})

async function saveRecipe(file) {
  let parsedName=`recipes/${file.name}.json`
  try{
    await fs.writeFile(parsedName,JSON.stringify(file,null,2),'utf8')
  }catch(err){
    console.log(`Error saving File:\n${err}`)
  }
}
// Recipe Form Page


app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`)
});
