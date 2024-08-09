//todo o    o        8 8           .oPYo.               
//todo 8    8        8 8           8    8              
//todo o8oooo8 .oPYo 8 8 .oPYo    o8YooP' o    o  .oPYo. 
//todo 8    8 8oooo8 8 8 8    8    8      8    8 8      8
//todo 8    8 8.     8 8 8    8    8      8    8 8      `
//todo 8    8 `Yooo' 8 8 `YooP'    8      `YooP' `YooP8o8
//todo                                                  8
//todo                                             ooooP'
//*:::::: Api MVC creada con express.js sqlite y motor de plantillas PUG ::
//*:::::: Actualizada el 09/08/2024 :::::::::::::::::::::::::::::::
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