import {SET_MOVIE} from './types'


export const setMovie = selectedMovie =>{
    return{
        type:SET_MOVIE,
        selectedMovie
    }
}