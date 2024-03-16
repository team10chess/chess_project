import {Join} from '../api/index'

export const joinUsers = (userData) =>{
    try {
        console.log(userData)
        const {data} = Join(userData)

    } catch (error) {
        console.log(error)
    }
}