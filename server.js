import express from "express"
import nunjucks from "nunjucks"
import morgan from "morgan"
import fs from "fs"

const app = express()

app.use(morgan("dev"))
app.use(express.static("public"))

import index_router from "./routes/index.js"
import router from "./routes/index.js"

const {fruits} = JSON.parse(fs.readFileSync("./data/fruit.json"))


nunjucks.configure("views", {
    autoescape: true,
    express: app
})


app.use("/", index_router)

router.get("/fruit", (req, res) =>{
    res.render("fruit.njk", {
        fruit: fruits
    })
})

router.get("/fruit/:id", (req,res) => {
    const selected_fruit = fruits.find(f => f.id === +req.params.id)

    console.log(selected_fruit)

    if (selected_fruit) {
        console.log("hiiiiii :)")
        res.render("single_fruit.njk", {
            name: selected_fruit.name,
            texture: selected_fruit.texture
        })
    } else {
        console.log("baiiiiiiii :(")
        res.status(404).json({error: "fruit not found"})
    }
})


app.listen(3000,() =>{
    console.log("Server is running on http://localhost:3000")
})