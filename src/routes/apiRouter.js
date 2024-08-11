import express from 'express'
import serv from '../services/userServices.js'
import userController from '../controllers/userController.js';
const apiRouter = express.Router()
//Esta es una ruta de actualizacion por lo
apiRouter.put('/user/:id', userController.updateUser)

apiRouter.get('/userMock', async(req,res)=>{
    try {
        const response = await serv.getUsers()
        res.status(200).json(response)
    } catch (error) {
        res.status(error.status ||500).json({error: error.message})
    }
})
export default apiRouter