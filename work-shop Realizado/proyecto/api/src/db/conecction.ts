import { Sequelize } from 'sequelize-typescript';
import config from '../lib/config';
import { User } from '../models/User';
 const sequelize = new Sequelize({
    dialect: 'postgres',
    database: config.dbName,
    password: config.dbPassword,
    username: config.dbUser,
   // storage: ':memory:',
    models: [__dirname + '/models'],
});

sequelize.addModels([User]); // Agrega tus modelos aquí

export default sequelize;