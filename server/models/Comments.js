const Sequelize=require("sequelize")
const sequelize=require("../utils/db")

const Comments=sequelize.define("Commets",{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type:Sequelize.STRING,
        default:"Anonymus"
    },
    comment:Sequelize.STRING
},{
    timestamps:false
});

module.exports=Comments