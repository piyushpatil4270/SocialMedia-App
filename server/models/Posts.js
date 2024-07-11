const Sequelize=require("sequelize")
const sequelize=require("../utils/db")


const Posts=sequelize.define("Posts",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    title:{
        type:Sequelize.STRING
    },
    image:{
        type:Sequelize.STRING
    }
},{
    timestamps:false
});

module.exports=Posts