import React from 'react'

const Hello = ({student1, student2}) => {
    return (
        <div>
            <h1>Hello {student1} {student2 && `and ${student2}`}</h1>
        </div>
    )
}

export default Hello