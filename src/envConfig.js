import dotenv from 'dotenv'
dotenv.config()
const {DB_USER,DB_PASSWORD,DB_HOST,DB_NAME,PORT}= process.env


export default {
 Port : process.env.PORT,
 DbConnect : `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
 DefaultImg : process.env.DEFAULT_IMAGE,
 
}