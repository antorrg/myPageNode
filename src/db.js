import { Sequelize } from 'sequelize';
import path from 'path'
import models from './models/index.js'
//import env from './envConfig.js'


const __dirname = path.resolve();

// const sequelize = new Sequelize(env.DbConnect, {
//   logging:false,
//   native: false,
// })

//* Configurar la base de datos SQLite en la carpeta 'database'
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database', 'database.sqlite'), // Ruta a la base de datos
  logging:false,
});

Object.values(models).forEach(model=>model(sequelize))
const {User} = sequelize.models;

export {
    User,
    sequelize
}
