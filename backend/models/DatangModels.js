import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Datang = db.define('datang', {
    id_datang: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    pelapor: DataTypes.STRING
},{
    freezeTableName:true
})

export default Datang;

