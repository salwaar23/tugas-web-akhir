import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Warga = db.define('warga', {
    nokk: DataTypes.STRING,
    nik: DataTypes.STRING,
    nama_warga: DataTypes.STRING,
    gender: DataTypes.STRING,
    usia: DataTypes.INTEGER,
    sta: DataTypes.STRING,
    pekerjaan: DataTypes.STRING
},{
   freezeTableName : true
})

export default Warga;

