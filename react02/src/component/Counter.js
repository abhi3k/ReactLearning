import React, {Component} from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            number : 0,
        }
    }
    changeNumber = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    render(){
        const { number } = this.state
        return (
            <div>
                <h1>The number is {number}</h1>
                <button onClick={ this.changeNumber }>Increase the Number</button>
            </div>
        )
    }
}

export default Counter