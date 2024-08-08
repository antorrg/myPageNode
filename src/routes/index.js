import express from 'express'
import userRouter from './userRouter.js'
import apiRouter from './apiRouter.js';

const indexRouter = express.Router()
indexRouter.use(userRouter)
indexRouter.use('/api', apiRouter)

export default indexRouter;