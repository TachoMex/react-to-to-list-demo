import React from 'react'

const Container = (props) => {
    return (
        <div id="container" className='conatiner'>
            { props.children }
        </div>
    )
}

export default Container;