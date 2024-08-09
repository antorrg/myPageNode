import { Sequelize } from 'sequelize';
import {fileURLToPath} from 'url'
import path from 'path'
import models from './models/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar la base de datos SQLite en la carpeta 'database'
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'database', 'database.sqlite') // Ruta a la base de datos
});

Object.values(models).forEach(model=>model(sequelize))
const {User} = sequelize.models;

export {
    User,
    sequelize
}