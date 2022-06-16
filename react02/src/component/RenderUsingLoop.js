import React, { Component } from 'react'

class RenderUsingLoop extends Component {
    constructor(props){
        super(props)

        this.state = {
            students: [
                {
                    name:'Abhishek',
                    batch: 10,
                    country:'India'
                },
                {
                    name:'Rohit',
                    batch: 11,
                    country:'India'
                },
                {
                    name:'Raksh',
                    batch: 7,
                    country:'India'
                },
                {
                    name:'Snathan',
                    batch: 9,
                    country:'India'
                },
                {
                    name:'Shubham',
                    batch: 12,
                    country:'India'
                },
            ],
        }
    }
    render() {
        const  { students } = this.state
        return (
            <>
            {
                students.map((student, index) => (
                    <div style={{
                            display:'flex',
                            justifyContent:'space-around',
                            border:'1px solid black',
                            margin:'10px',
                            padding:'5px',
                        }}
                        key={index}
                    >
                        <h1>{student.name}</h1>
                        <h1>{student.batch}</h1>
                        <h1>{student.country}</h1>
                    </div>
            ))}
            </>
        )
    }
}

export default RenderUsingLoop