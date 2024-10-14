import axios from 'axios'
import { base_url } from './ApiConst'

export const UserLogin = async(userData) =>{
    return await axios.post(`${base_url}api/v0/login`,userData,{
        headers: {
          "Content-Type": "application/json",
          // Authorization: Token,
        },
   })
}

export const UserSignUp = async(payload) =>{
    return await axios.post(`${base_url}api/v0/register`,payload,{
        headers: {
          "Content-Type": "application/json",
          // Authorization: Token,
        },
   })
}

export const BooksData = async() =>{
    return await axios.get(`${base_url}api/v0/books`,{
        headers: {
          "Content-Type": "application/json",
          // Authorization: Token,
        },
   })
}