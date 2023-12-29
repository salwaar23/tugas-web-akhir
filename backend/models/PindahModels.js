import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Pindah = db.define('pindah', {
    id_pindah: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    alasan: DataTypes.STRING
},{
    freezeTableName:true
})

export default Pindah;

