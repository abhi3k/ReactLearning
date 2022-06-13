import React from 'react'
import Gc1 from './Gchild1'
import './ChildComponent1.css'
// importing react is not necessary for function components while for class components will need React import

const ChildComponent1 = () => {
    return (
        <div
            className="ChildComponent1"
        >
            <h1>Child Component 1</h1>
            <Gc1 heading="head1" description="red is in the description" bgColor="yellow" color="brown"/>
            <Gc1 heading="not a heading" bgColor="blue" color="black"/>
        </div>
    )
}

export default ChildComponent1


        // <div
        //     className="ChildComponent1" style={{ backgroundColor:"yellow",   color:"green" }}
        // >
