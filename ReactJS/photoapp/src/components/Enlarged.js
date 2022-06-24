import React from 'react'

const Enlarged = () => {
    const imgStyle = {
        height: '80vh',
        width: '80vw',
        margin: '30px 0px',
    }
    return (
        <>
            <img src={"https://picsum.photos/v2/list"} alt="full-size" style={imgStyle}/>
        </>
    )
}

export default Enlarged