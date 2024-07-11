const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const sequelize = require("./utils/db");
const app = express();
const server = http.createServer(app);
const Posts = require("./models/Posts");
const Comments = require("./models/Comments");


app.use(bodyParser({ extended: true }));
app.set('view engine','ejs')

Posts.hasMany(Comments, { as: 'comments' });
Comments.belongsTo(Posts, { foreignKey: 'postId' });

app.get("/", async (req, res, next) => {
  const posts = await Posts.findAll({ include: [{ model: Comments, as: 'comments' }] });
 
  
 res.render(path.join(__dirname,"views","index.ejs"),{posts})
  
});

app.post("/post", async (req, res, next) => {
  const body = req.body;
  console.log(body);
  await Posts.create({
    title: body.title,
    image: body.image,
  });
  res.redirect("/");
});

app.post("/comment",async (req, res, next) => {
  console.log(req.body);
  const id=parseInt(req.body.postid)
  const cmt=req.body.comment
  const comment= await Comments.create({
    username:"Anonymus",
    comment:cmt,
    postId:id
  })
  res.redirect("/");
});



sequelize
  .sync()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log("Db error ", err));

server.listen(4500, () => console.log("Server started on port 4500"));
