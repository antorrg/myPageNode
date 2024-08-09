
import app from './src/app.js'
import * as sqlite from './src/db.js'
import s from './src/envConfig.js'


app.listen(s.Port, async () => {
      try{
        await sqlite.sequelize.sync({force: false})
      console.log(`Servidor corriendo en http://localhost:${s.Port}`);
      }catch(error){
        console.error('Algo paso: ', error)
      }
  });