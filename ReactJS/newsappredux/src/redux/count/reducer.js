import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './action.js'

let countInitialState = {
    count : 10,
}

export const countReducer = (state = countInitialState, action) => {
    switch(action.type){
        case INCREMENT_COUNTER:
            return {
                ...state,
                count : state.count + action.payload
            } 
        
        case DECREMENT_COUNTER:
            return {
                ...state,
                count : state.count - action.payload
            }
        
        default:
            return state
    }
}
