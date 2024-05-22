import { Sequelize } from "sequelize";
import config from "./config";
//import associations from "./associations";

//todo esto esta en la documentacion de sequelize
const sequelize = new Sequelize(
  config.dbName,
  config.dbUser,
  config.dbPassword,

  {
    host: config.dbHost,
    dialect: "mysql",
    /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */ logging:
      false,
    native: false,
    define: {
      timestamps: true, //me guarda la hora que se crea
    },
  }
);

//exportamos la instancia
export default sequelize;
