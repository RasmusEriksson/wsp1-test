import express from "express"
const router = express.Router()

const nav = ["/","/about","/greeting"]

router.get("/", (req, res) =>{
    res.render("index.njk", {
        nav : nav,
        title : "TITLE RAHHH",
        message : "RAAAAAAAAAAAAAAAAAAAAAA"
    })
})

router.get("/about", (req,res) =>{
    res.render("about.njk",{
        nav: nav,
        title: "About",
        message: "ok"
    })
})

router.get("/greeting", (req,res) => {
    res.render("greeting.njk",{
        title: "greeting",
        name: req.query.name,
        message: req.query.message,
    })
})

export default router