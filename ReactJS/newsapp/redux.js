/*
    * Action - object    
    {
        type : 'INCREMENT_COUNTER'
    }
    
    * Action Type Constant
    const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
    {
        type : INCREMENT_COUNTER
    }

    * Action Creators
        - a function that returns an action object
        
        const incrementCounter = () => ({
            type: INCREMENT_COUNTER
        })

        dispatch(incrementCounter)
*/

/*
        * REDUCER FUNCTION
            - define the initial state. (the central state)
            - function with 2 parameters - prevState, action
            - contains logic to return the updated state on the basis of action type

            let initialState = {
                count : 0
            }

            const reducer = (state = initialState, action) => {
                switch(action.type){
                    case INCREMENT_COUNTER:
                        return {
                            count : state.count + 1
                        }
                    default:
                        return state
                }
            }
*/

/*

    REDUX STORE
        - create store from createStore()
        - store.subscribe(callback)
            - always returns a reference to a method using which we can unsubscribe a state

    
    import { createStore } from 'redux'

    let store = createStore(reducer)
    console.log(store.getState())

    store.subscribe(() => {})
    
    store.dispatch(incrementCounter())

    let unsubscribe = store.subscribe(() => {})
    unsubscribe()
*/

// import { createStore } from 'redux'
const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')

let initialState = {
    count : 0,
}

const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

const incrementCounter = (count = 1) => ({
    type : 'INCREMENT_COUNTER',
    payload: count
})

const decrementCounter = (count = 1) => ({
    type : 'DECREMENT_COUNTER',
    payload: count
})

const reducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT_COUNTER:
            return {
                count : state.count + action.payload
            } 
        
        case DECREMENT_COUNTER:
            return {
                count : state.count - action.payload
            }
        
        default:
            return state

    }
}

let store = createStore(reducer, applyMiddleware(createLogger()))
store.subscribe(() => {})
store.dispatch(incrementCounter(5))
store.dispatch(incrementCounter())
store.dispatch(decrementCounter(6))

// console.log(store.getState())
