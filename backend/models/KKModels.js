import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const KK = db.define('kk', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nokk: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    nama_kk: DataTypes.STRING,
    anggota: DataTypes.INTEGER
},{
    freezeTableName:true
})

export default KK;
