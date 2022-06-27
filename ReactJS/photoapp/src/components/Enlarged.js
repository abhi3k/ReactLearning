import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import axios from axios

const Enlarged = () => {
    const { id } = useParams
    const [singlePhoto, setSinglePhoto ] = useState([])

    // useEffect(() => {
        
    // })

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