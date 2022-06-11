import React, { Component } from 'react'

//Class Based Component
class HelloClass extends Component {
    constructor(props) {
        super(props)

        //Creating State
        this.state = {
            batchNo : 10,
            country: 'INDIA'
        }
    }

    // for state update, use setState method
    // setState() is an asynchronous method 
    changeBatchNumber = () => {
        this.setState({
            batchNo : 16,
        })
    }

    changeCountry = () => {
        this.setState({
            country: 'swiss'
        })
    }

    render() {
        const { student1, student2 } = this.props
        const { batchNo, country } = this.state
        return (
            <div>
                <h1>Hello Class {student1} {student2 && `and ${student2}`}</h1>
                <h2>Batch Number : {batchNo}</h2>
                <h3>From : {country}</h3>
                <button onClick={this.changeBatchNumber}>Change Batch Number</button>
                <button onClick={this.changeCountry}>Change Batch Number</button>
            </div>
        )
    }
}

export default HelloClass