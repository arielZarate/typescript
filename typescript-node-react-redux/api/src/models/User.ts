import { DataTypes } from "sequelize";
import sequelize from "../libs/db";

const User = sequelize.define(
  "User",

  {
    id: {
      type: DataTypes.UUID, // genera un UUID, creo que son 16 digitos jaja
      // type: DataTypes.INTEGER,
      allowNull: false, //permitirnull:false
      primaryKey: true, //es clave primaria
      //autoIncrement: true, //se autoincrementa , no haria falta porque son uuid no tiene sentido pero lodejo como ejemplo
      defaultValue: DataTypes.UUIDV4, //el default es UUID.V4 //lo trae por defecto sequelize es genial!!
      // unique: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

  {
    timestamps: true,
    tableName: "User", // Especifica el nombre de la tabla como 'User'
  }
);

export default User;
