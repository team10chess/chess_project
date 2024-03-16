import {create} from '../api/index'

export const createUsers = (userData) =>{
    try {
        console.log(userData)
        const {data} = create(userData)

    } catch (error) {
        console.log(error)
    }
}