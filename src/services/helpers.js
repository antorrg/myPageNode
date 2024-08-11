import env from '../envConfig.js'
//todo   Variables expuestas: userCleaner

export const userCleaner = (info, isObject)=>{
    return isObject? userFormater(info) : info.map((user)=> userFormater(user))
 }
const userFormater = (data)=>{
  const  parsedRole =scope(data)
    return {
        id:data.id,
        email: data.email,
        nickname: data.nickname,
        name: data.name,
        role: parsedRole,
        image: data.image,
        country: data.country,
        enable: data.enable,
    }
}
const scope = (user)=>{
    switch(user.role){
      case 0:
      return "Administrador"
      case 2 : 
      return "Moderador"
      case 9 :
      return "Super Admin"
      case 1 :
      default :
      return "Usuario"
    }
}
export const revertScope = (user)=>{
    switch(user.role){
      case "Administrador":
      return 0;
      case "Moderador": 
      return 2;
      case "Super Admin":
      return 9
      case "Usuario":
      default :
      return 1
    }
}

export const emptyUser = ()=>{
    return [{ 
        id: 'noData',
        email: 'No hay informacion aun',
        nickname: 'No hay informacion aun',
        name: 'No hay informacion aun',
        role: 'No hay informacion aun',
        image: env.DefaultImg,
        country: 'No hay informacion aun',
        enable: 'No hay informacion aun',
    }]
}
