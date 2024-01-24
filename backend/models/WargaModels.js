import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import KK from "./KKModels.js";

const { DataTypes } = Sequelize;

const Warga = db.define('warga', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nokk: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nik: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true  
    },
    nama_warga: DataTypes.STRING,
    gender: DataTypes.STRING,
    usia: DataTypes.INTEGER,
    sta: DataTypes.STRING,
    pekerjaan: DataTypes.STRING
}, {
    freezeTableName: true
});

KK.hasMany(Warga, { foreignKey: 'nokk', sourceKey: 'nokk' }); 
Warga.belongsTo(KK, { foreignKey: 'nokk', targetKey: 'nokk' }); 


export default Warga;
