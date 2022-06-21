import React from 'react'
import { useEffect } from 'react'

const ChildComponent = () => {

    useEffect(() => {
        console.log("[Child Component] Component Mounted")
    }, [])


    useEffect(() => {
        return () => {
            console.log("[Child Component] Component Will Unmount now...")
        }
    }, [])
    return (
        <>
            <div>Child Component</div>
        </>
    )
}

export default ChildComponent