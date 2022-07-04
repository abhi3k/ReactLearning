import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import './photos/Photo.css'

const Enlarged = () => {
    const { id } = useParams()
    const [singlePhoto, setSinglePhoto] = useState([])

    useEffect(() => {
        const getSinglePhoto = async () => {
            try {
                const res = await axios.get(`https://picsum.photos/id/${id}/info`)
                setSinglePhoto(res.data)
            } catch (err) {
                console.error(err)
            }
        }
        getSinglePhoto()
    }, [id])

    const imgStyle = {
        height: '80vh',
        width: '80vw',
        margin: '30px 0px',
    }
    return (
        <>
            {
                Object.keys(singlePhoto).length ?
                    (
                        <img src={singlePhoto.download_url} alt="full-size" style={imgStyle} />
                    ) : (

                        <div className="spinner-wrapper">
                            <Spinner animation="border" role="status"></Spinner>
                        </div>
                    )
            }
        </>
    )
}

export default Enlarged