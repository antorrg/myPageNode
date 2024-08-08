import express from 'express'
import userController from '../controllers/userController.js';
const apiRouter = express.Router()
//Esta es una ruta de actualizacion por lo
apiRouter.put('/user/:id', userController.updateUser)

export default apiRouter