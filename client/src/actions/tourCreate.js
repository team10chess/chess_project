import {tourCreate} from '../api/index'

export const createTours = (tourData) =>{
    try {
        console.log(tourData)
        const {data} = tourCreate(tourData)

    } catch (error) {
        console.log(error)
    }
}