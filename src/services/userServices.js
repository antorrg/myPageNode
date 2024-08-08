import {usuarios} from '../models/user.js'

export default {
    create : (name, email, password, country)=>{
        try {
            const id = usuarios.length+1;
            const newUser = {id, name, email, password, country}
            usuarios.push(newUser)
        } catch (error) {
            console.error('algo paso', error)
        }
    },
    getById: (id) => {
        try {
            console.log('soy el id del service ', id)
            const response = usuarios.find(user => user.id === parseInt(id));
                return response;
        } catch (error) {
            console.error('algo pasó en getById:', error);
        }
    },
    updaterUser: (id, newUser) => {
        try {
            console.log('soy el id del service ', id)
            let userFound = usuarios.find(user => user.id === parseInt(id));
            userFound = newUser
            console.log(userFound)
            return userFound
        } catch (error) {
            console.error('algo pasó en getById:', error);
        }
    }
}