import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Pindah = db.define('pindah', {
    pindahid: DataTypes.STRING,
    nama: DataTypes.STRING,
    alasan: DataTypes.STRING
},{
    freezeTableName:true
})

export default Pindah;

