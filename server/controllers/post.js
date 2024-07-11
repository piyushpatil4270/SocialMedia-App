const Posts=require("../models/Posts")



const addPost = async (req, res, next) => {
    const body = req.body;
    console.log(body);
    await Posts.create({
      title: body.title,
      image: body.image,
    });
    res.redirect("/");
  }


  module.exports=addPost