import {usuarios}from '../models/pepito.js'
import serv from '../services/userServices.js'
import * as eh from '../utils/errorHandlers.js'

export default  {
  home: (req, res)=>{
    res.render('index')
  },
  getAllUsers: eh.catchErrorMVC(async(req, res) => {
    const users = await serv.getUsers()
    res.render('users', {users});
  }),
  getUserById : eh.catchErrorMVC(async(req, res)=>{
    const {id} = req.params;
    const user = await serv.getById(id)
    //console.log('yo soy el user del controller: ',user)
    res.render('userDetail', {user})
  }),
  createUser: eh.catchErrorMVC(async(req, res) => {
    const { name, email, password, country  } = req.body;
    //console.log('controller body: ',req.body)
    await serv.create( name, email, password, country );
    res.status(201).redirect('/users');
  }),
  getUserUpd : eh.catchErrorMVC(async(req, res)=>{
    const {id} = req.params;
    const user = await serv.getById(id)
    //console.log('yo soy el user del controller: ',user)
    res.render('updateUser', {user})
  }),
  updateUser : eh.catchErrorREST(async(req, res)=>{
    const {id}= req.params;
    const newUser= req.body;
    try{
    const response = await serv.updaterUser(id, newUser)
    res.status(200).json(response)
    }catch(error){
    res.status(error.status || 500).json({error: error.message})
    }
  }),
};
