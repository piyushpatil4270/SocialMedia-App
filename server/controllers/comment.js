const Comments=require("../models/Comments")
getCommets=async (req, res, next) => {
    console.log(req.body);
    const id=parseInt(req.body.postid)
    const cmt=req.body.comment
    const comment= await Comments.create({
      username:"Anonymus",
      comment:cmt,
      postId:id
    })
    res.redirect("/");
  }


  module.exports=getCommets