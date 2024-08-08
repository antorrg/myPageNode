import {usuarios}from '../models/user.js'
import serv from '../services/userServices.js'

export default  {
  home: (req, res)=>{
    res.render('index')
  },
  getAllUsers: (req, res) => {
    const users = usuarios;
    res.render('users', {users});
  },
  getUserById : async(req, res)=>{
    const {id} = req.params;
    const user = await serv.getById(id)
    //console.log('yo soy el user del controller: ',user)
    res.render('userDetail', {user})
  },
  createUser: (req, res) => {
    const { name, email, password, country  } = req.body;
    console.log('controller body: ',req.body)
    serv.create( name, email, password, country );
    res.redirect('/users');
  },
  getUserUpd : (req, res)=>{
    const {id} = req.params;
    const user = serv.getById(id)
    console.log('yo soy el user del controller: ',user)
    res.render('updateUser', {user})
  },
  updateUser : (req, res)=>{
    const {id}= req.params;
    const newUser= req.body;
    try{
    const response = serv.updaterUser(id, newUser)
    res.status(200).json(response)
    }catch(error){
      res.status(500).json({error: error.message})
    }
  },
};
