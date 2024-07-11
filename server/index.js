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
const postRouter=require("./routes/post")
const commentRouter=require("./routes/comment")


app.use(bodyParser({ extended: true }));
app.set('view engine','ejs')

Posts.hasMany(Comments, { as: 'comments' });
Comments.belongsTo(Posts, { foreignKey: 'postId' });

app.get("/", async (req, res, next) => {
  const posts = await Posts.findAll({ include: [{ model: Comments, as: 'comments' }] });
 
  
 res.render(path.join(__dirname,"views","index.ejs"),{posts})
  
});

app.use("/post",postRouter)
app.use("/comment",commentRouter)






sequelize
  .sync()
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => console.log("Db error ", err));

server.listen(4500, () => console.log("Server started on port 4500"));
