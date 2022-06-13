import React from 'react'

const Gchild1 = ({ heading, description, bgColor, color }) => {
    // let grandChildStyle = { backgroundColor : 'grey'}
    return (
        // <div className="Gchild1" style={grandChildStyle}>
        // if props name is same as the html attribute name, then it can be passed directly within the style, else standard syntax should written to access the prop responsible
        <div className="Gchild1" style={{backgroundColor:bgColor, color}}>
            <h5>{heading}</h5>
            {description && <p>Description goes here -- {description}</p>}
        </div>
    )
}

export default Gchild1


// Conditional Rendering - Control rendering of JSX based on a particular condition( with && operator)