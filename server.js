import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"
const app = express()

app.use(morgan("dev"))
app.use(express.static("public"))


nunjucks.configure("views", {
    autoescape: true,
    express: app
})


app.get("/", (req, res) =>{
    res.render("index.njk", {
        title : "TITLE RAHHH",
        message : "RAAAAAAAAAAAAAAAAAAAAAA"
    })
})

app.get("/about", (req,res) =>{
    res.render("about.njk",{
        title: "About",
        message: "ok"
    })
})

app.get("/greeting", (req,res) => {
    res.render("greeting.njk",{
        title: "greeting",
        name: req.query.name,
        message: req.query.message,
    })
})

app.listen(3000,() =>{
    console.log("Server is running on http://localhost:3000")
})