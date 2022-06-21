import React from 'react'
import Child from './ChildComponent'
import { useState, useEffect } from 'react'

const ParentComponent = () => {

    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)

    useEffect(() => {
        console.log("[Parent Component] Component Mounted")
    }, [])

    useEffect(() => {
        console.log("[Parent Component] Component Updated")
    }, [count])

    return (
        <>
            <h1>Parent Component</h1>
            <h3>{count}</h3>
            <button 
                onClick={() => setCount((prevCount) => prevCount + 1)}>
                    Increment
            </button>
            <button 
                onClick={() => setShow((prevShow) => !prevShow)}>
                    Show/Hide
            </button>
            {show && <Child />}
        </>
    )
}

export default ParentComponent

/*
    useEffect(() => {

    },[])
    first argument : callBack function
    second argument : dependency array to trigger callback whenever any state inside dependency array changes

    useEffect hook can be used to replicate all 3 life-cycle methods :
        1. componentDidMount (Dependeny array is empty)

          #  useEffect(() => {
                /code    
             }, [])

        2. componentDidUpdate
           #  useEffect(() => {
                /code    
             }, [state1, state2,...])
        
        3. componentWillUnmount
             - inside this return another callback

            #  useEffect(() => {
                 return () => {
                    console.log("[Parent Component] Component Will Unmount")
                    }
                }, []) 
*/