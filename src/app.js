import express from 'express' ;
import morgan from 'morgan'
import bodyParser from 'body-parser';
import {fileURLToPath} from 'url'
import path from 'path'
import indexRouter from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname)
const app = express();
app.use(morgan('dev'))


// Configuración de PUG
app.set('view engine', 'pug');
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "views")))
app.use(express.static(path.join(__dirname, "public")))

// Middleware para parsear el body de las peticiones
app.use(bodyParser.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//     res.setHeader("Content-Security-Policy", "default-src 'none'; img-src 'self' http: https: data:;");
//     next();
//   });
app.use(express.json())
  
// Rutas
app.use(indexRouter);


export default app;