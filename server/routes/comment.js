const express=require("express")
const router=express.Router()
const addComments=require("../controllers/comment")


router.post("/",addComments)



module.exports=router