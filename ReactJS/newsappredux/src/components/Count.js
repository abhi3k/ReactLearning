import React from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, decrementCounter } from '../redux/count/action'


const Count = () => {
    const count = useSelector((state) => state.count.count)
    const dispatch = useDispatch()

    return (
        <div className="text-center">
            <h1 className="display-1">{count}</h1>
            <Button variant="dark" onClick={() => dispatch(incrementCounter())}>Increment</Button>
            <Button variant="dark" onClick={() => dispatch(incrementCounter(5))}>Increment By 5</Button>
            <Button variant="dark" onClick={() => dispatch(decrementCounter())}>Decrement</Button>
            <Button variant="dark" onClick={() => dispatch(decrementCounter(5))}>Decrement By 5</Button>
        </div>
    )
}

export default Count







/*

import React from 'react'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../redux/count/action'


const Count = ({ count, incrementCounter, decrementCounter }) => {
    return (
        <div className="text-center">
            <h1 className="display-1">{count}</h1>
            <Button variant="dark" onClick={() => incrementCounter()}>Increment</Button>
            <Button variant="dark" onClick={() => incrementCounter(5)}>Increment By 5</Button>
            <Button variant="dark" onClick={() => decrementCounter()}>Decrement</Button>
            <Button variant="dark" onClick={() => decrementCounter(5)}>Decrement By 5</Button>
        </div>
    )
}

// mapping the central state of redux to the props of the component
const mapStateToProps = (state) => {
    return {
        count : state.count
    }
}

// mapping the dispatch of the redux to the props of the component
const mapDispatchToProps = (dispatch) => {
    return {
        incrementCounter: (payload) => dispatch(incrementCounter(payload)),
        decrementCounter: (payload) => dispatch(decrementCounter(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Count)

*/