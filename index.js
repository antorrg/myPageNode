
import app from './src/app.js'
import s from './src/envConfig.js'


app.listen(s.Port, () => {
    console.log(`Servidor corriendo en http://localhost:${s.Port}`);
  });