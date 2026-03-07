const express = require("express")
const router = express.Router()
const Comment = require("../models/Comment")

router.post("/", async(req,res)=>{

const comment = await Comment.create(req.body)

res.json(comment)

})

router.get("/", async(req,res)=>{

const comments = await Comment.find()

res.json(comments)

})

module.exports = router