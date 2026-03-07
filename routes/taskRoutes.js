const express = require("express")
const router = express.Router()
const Task = require("../models/Task")

router.post("/", async(req,res)=>{

const task = await Task.create(req.body)

res.json(task)

})

router.get("/", async(req,res)=>{

const tasks = await Task.find()

res.json(tasks)

})

module.exports = router