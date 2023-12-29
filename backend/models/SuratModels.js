import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Surat = db.define('surat', {
    nama: DataTypes.STRING,
    jk : DataTypes.STRING,
    alamat : DataTypes.STRING,
    keperluan: DataTypes.STRING
},{
    freezeTableName:true
})

export default Surat;
