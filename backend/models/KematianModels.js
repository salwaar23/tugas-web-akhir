import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Kematian = db.define('kematian', {
    nik: DataTypes.STRING,
    nama: DataTypes.STRING,
    penyebab: DataTypes.STRING
},{
    freezeTableName:true
})

export default Kematian;

