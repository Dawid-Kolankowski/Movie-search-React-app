import {SET_MOVIE} from '../actions/types'

const INITIAL_STATE={
movie:[],
}

export const selectedMovie=(state=INITIAL_STATE,action)=>{
switch(action.type){
    case SET_MOVIE:
        return{...state,movie:action.selectedMovie}
    default:
        return state

}
}