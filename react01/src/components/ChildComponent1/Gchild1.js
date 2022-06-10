import React from 'react'

const Gchild1 = ({ heading, description, backgroundColor }) => {
    // let grandChildStyle = { backgroundColor : 'grey'}
    return (
        // <div className="Gchild1" style={grandChildStyle}>
        <div className="Gchild1">
            <h5 style={{backgroundColor:"backgroundColor"}}>{heading}</h5>
            {description && <p>Description goes here -- {description}</p>}
        </div>
    )
}

export default Gchild1


// Conditional Rendering - Control rendering of JSX based on a particular condition( with && operator)