import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Lahir = db.define('lahir', {
    id_lahir : DataTypes.INTEGER,
    nama : DataTypes.STRING,
    nokk : DataTypes.INTEGER
},{
    freezeTableName:true
})

export default Lahir;

