import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Pengaduan = db.define('pengaduan', {
    nama: DataTypes.STRING,
    nowa : DataTypes.STRING,
    kritik : DataTypes.STRING
},{
    freezeTableName:true
})

export default Pengaduan;

