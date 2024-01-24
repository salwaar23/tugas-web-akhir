import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Agenda = db.define('agenda', {
    nama_kegiatan: DataTypes.STRING,
    tgl:DataTypes.STRING,
    tempat: DataTypes.STRING
},{
    freezeTableName:true
})

export default Agenda;

