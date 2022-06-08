import React from 'react'

const Gchild1 = () => {
    let grandChildStyle = { backgroundColor : 'aqua'}
    return (
        <div className="Gchild1" style={grandChildStyle}>
            <h5>This is a grand child component</h5>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, nihil. Consequatur eligendi, exercitationem dicta vitae nulla quis commodi debitis cum neque perferendis quas et. Quisquam quo ullam magni eos? Delectus illo corporis, laboriosam ipsam ut commodi deleniti eius totam praesentium qui quo voluptatibus provident. Provident explicabo unde voluptate repudiandae sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi non optio sequi, aspernatur reiciendis iste at vero in, eaque quod debitis illum quasi.</p>
        </div>
    )
}

export default Gchild1