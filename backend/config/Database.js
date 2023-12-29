import { Sequelize } from "sequelize";

const db = new Sequelize ('erte_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;