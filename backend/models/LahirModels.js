import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Lahir = db.define('lahir', {
    lahirid : DataTypes.STRING,
    nama : DataTypes.STRING,
    nokk : DataTypes.STRING
},{
    freezeTableName:true
})

export default Lahir;

