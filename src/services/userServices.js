import {usuarios} from '../models/pepito.js'
import {User} from '../db.js'
import bcrypt from 'bcrypt'
import env from '../envConfig.js'
import * as help from './helpers.js'


export default {
    create : async (name, email, password, country, image, role)=>{
        try {
            const userFound = await User.findOne({where:{email:email}})
            if(userFound){const error = {status:400, message:'Este email esta en uso'}; throw error};
            const nickname = email.split('@')[0]
            const hashedPassword = await bcrypt.hash(password, 12)
            const asignedRole = role? role : 1;
            const newUser =  await User.create({
                name: name,
                email: email,
                password: hashedPassword,
                nickname:nickname,
                country: country,
                image: image ?? env.DefaultImg,
                role:asignedRole,
            })
            return newUser
           
        } catch (error) {
            throw error;
        }
    },
    getUsers: async()=>{
        try {
            const users = await User.findAll();
            if(!users){const error= {status: 500, message:'Error inesperado'}; throw error;};
            if(users.length===0){return help.emptyUser()}
            return help.userCleaner(users, false)
            
        } catch (error) {
            throw error;
        }
    },
    getById: async(id) => {
        try {
            const userFound = await User.findByPk(id)
            if(!userFound){const error = {status:500, message: 'Error inesperado'}; throw error}
            return help.userCleaner(userFound, true)
        } catch (error) {
            console.error('algo pasó en getById:', error);
        }
    },
    updaterUser: async(id, newUser) => {
        try {
            const userFound = await User.findByPk(id)
            if(!userFound){const error ={status:404, message: 'Usuario no encontrado'}; throw error}
            console.log('soy el  viejo role: ',newUser.role)
            const updNickname = newUser.email.split('@')[0]
            const parsedRole = help.revertScope(newUser)
            console.log('soy el role: ',parsedRole)
            console.log('a ver el nuevo usuario: ',parsedRole)
            const newUpdUser = {
                name: newUser.name,
                email: newUser.email,
                nickname:updNickname,
                role: parseInt(parsedRole),
                image: newUser.image,
                country: newUser.country,
                enable: Boolean(newUser.enable),
            }
            const userUpd = await userFound.update(newUpdUser)
            return help.userCleaner(userUpd, true)
        } catch (error) {
            console.error('algo pasó en update:', error);
        }
    }
}