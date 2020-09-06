import React from 'react'

export const Title = ({ name, title }) => {
    return (
        <div style={{ marginTop: '100px', textAlign: 'center', textTransform: 'capitalize', fontSize: '16px' }}>
            <h1>{name} {title}</h1>
        </div>
    )
}
