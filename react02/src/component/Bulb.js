import React, { Component } from 'react'

class Bulb extends Component {
    constructor(props) {
        super(props)

        this.state = {
            bulbStatus: false
        }
    }

    toggleBulb = () => {
        this.setState((prevState) => ({
            bulbStatus: !prevState.bulbStatus
        }))
    }

    render() {
        let { bulbStatus } = this.state
        return (
            <>
                <img 
                    src={ 
                        bulbStatus
                        ? "https://www.w3schools.com/js/pic_bulbon.gif"

                        : "https://www.w3schools.com/js/pic_bulboff.gif"

                    } alt="bulb" height="500" style={{margin:"25px"}}
                />

                <button 
                    onClick={this.toggleBulb}
                    style={{ padding:'20px', margin:'20px' }}
                    >
        
                    Toggle Event
                </button>

            </>
        )
    }
}

export default Bulb
