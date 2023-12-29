import { Sequelize } from "sequelize";
import db from "../config/Database.js";
// import Warga from "./WargaModels.js";

const {DataTypes} = Sequelize;

const KK = db.define('kk', {
    nokk: DataTypes.INTEGER,
    nama_kk: DataTypes.STRING,
    anggota: DataTypes.INTEGER
},{
    freezeTableName:true
})
// KK.hasOne(Warga, {foreignKey:'nokk'});
// KK.belongsTo(Warga, {foreignKey:'nokk'});


export default KK;
