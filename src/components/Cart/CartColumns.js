import React from 'react'
import './Cart.css'

export const CartColumns = () => {
    return (
        <div className='cart-columns'>
            <div className='column'>
                <p>Products</p>
            </div>
            <div className='column'>
                <p>Product Name</p>
            </div>
            <div className='column'>
                <p>Price</p>
            </div>
            <div className='column'>
                <p>Quantity</p>
            </div>
            <div className='column'>
                <p>Remove</p>
            </div>
            <div className='column'>
                <p>Total</p>
            </div>
        </div>
    )
}
