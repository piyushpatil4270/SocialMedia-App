const express=require("express")
const router=express.Router()

const addPost=require("../controllers/post")
router.post("/",addPost )


module.exports=router