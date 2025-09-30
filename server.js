import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"
import fs from "fs"
const app = express()

app.use(morgan("dev"))
app.use(express.static("public"))

import index_router from "./routes/index.js"
import router from "./routes/index.js"


nunjucks.configure("views", {
    autoescape: true,
    express: app
})


app.use("/", index_router)

router.get("/fruit", (req, res) =>{
    const {fruits} = JSON.parse(fs.readFileSync("./data/fruit.json"))
    
    res.render("fruit.njk", {
        fruit: fruits
    })
})


app.listen(3000,() =>{
    console.log("Server is running on http://localhost:3000")
})