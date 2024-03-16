import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:5000"})


export const create = (authData) => API.post('/user/create', authData)
export const tourCreate = (authData) => API.post('/user/tourCreate', authData)
export const Join = (authData) => API.post('/user/Join', authData)

// export const signUp = (authData) => API.post('/user/signup', authData)
