import React from 'react'
import './Cart.css'

export const CartItem = ({ item, value }) => {
    const { id, title, img, price, total, count } = item
    const { increment, decrement, removeItem } = value

    return (
        <div className='cart-items'>
            <span>
                <img src={img} className='cart-product-img' alt='Product' />
            </span>

            <p className='cart-product-caption'>{title}</p>
            <p className='cart-product-price'>${price}</p>
            <div className='buttons-box'>
                <button className='btn-qty' onClick={() => decrement(id)}>-</button>
                <span className='qty-count'>{count}</span>
                <button className='btn-qty' onClick={() => increment(id)}>+</button>
            </div>
            <div className='cart-remove' onClick={() => removeItem(id)}>
                <span className='fas fa-trash' role='presentation'> </span>
                <span className='cart-total-mobile'>Remove</span>
            </div>
            <p><span className='cart-total-mobile'>Total:</span> $ {total}</p>
        </div>
    )
}
