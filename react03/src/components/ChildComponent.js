import React, { Component } from 'react'

class ChildComponent extends Component {

    componentDidMount() {
        console.log("[CHILD]Inside componentDidMount")
        console.log("-----[CHILD]---Mount Finished-------------")
    }
    componentDidUpdate() {
        console.log("[CHILD]Inside componentDidUpdate")
        console.log("-----[CHILD]---Update Finished--------------")
    }

    componentWillUnmount() {
        console.log("[CHILD]Inside componentWillUnmount")
        console.log("------[CHILD]--Unmount Finished------------")
    }
    render() {
        console.log("[CHILD]Inside render")

        return (
            <div>Child Component</div>
        )
    }
}

export default ChildComponent