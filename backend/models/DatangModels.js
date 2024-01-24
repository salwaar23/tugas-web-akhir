import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Datang = db.define('datang', {
    datangid: DataTypes.STRING,
    nama: DataTypes.STRING,
    pelapor: DataTypes.STRING
},{
    freezeTableName:true
})

export default Datang;

