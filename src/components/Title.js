import React from 'react'

export const Title = ({ name, title }) => {
    return (
        <div className='page-title'>
            <h1>{name} {title}</h1>
        </div>
    )
}
