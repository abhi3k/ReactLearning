import React, { Component } from 'react'
import ChildCounter from './ChildCounter'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number: 0,
        }
    }

    increaseNumber = () => {
        this.setState((prevState) => ({
            number: prevState.number + 1,
        }))
    }

    decreaseNumber = () => {
        this.setState({
            number: this.state.number - 1,
        })
    }

    incrementCounter = () => {
        this.increaseNumber()
        this.increaseNumber()
        this.increaseNumber()
        this.increaseNumber()
        this.increaseNumber()
    }

    render() {
        const { number } = this.state
        return (
            <div>
                <h1>The number is {number}</h1>
                <button
                    onClick={this.increaseNumber}
                    style={{ fontFamily: 'cursive', color: 'red' }}
                >
                    Increase the Number
                </button>
                <br />
                <button
                    onClick={this.decreaseNumber}
                    style={{ fontFamily: 'menlo', color: 'blue' }}
                >
                    Decrease the Number
                </button>
                <br />
                <button
                    onClick={this.incrementCounter}
                    style={{ fontFamily: 'monaco', color: 'orange' }}
                >
                    Increase the Number by 5
                </button>
                <ChildCounter number={number}/>
            </div>
        )
    }
}

export default Counter