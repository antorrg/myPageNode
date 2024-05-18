import express from 'express' ;
import bodyParser from 'body-parser';
import userRoutes from './routes/userRouter';

const app = express();


// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware para parsear el body de las peticiones
app.use(bodyParser.urlencoded({ extended: true }));

// Rutas
app.use('/users', userRoutes);

// Servir archivos estáticos
app.use(express.static('public'));

export default app;