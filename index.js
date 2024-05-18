
import app from './src/app'
import s from './src/envConfig'


app.listen(s.Port, () => {
    console.log(`Servidor corriendo en http://localhost:${s.Port}`);
  });