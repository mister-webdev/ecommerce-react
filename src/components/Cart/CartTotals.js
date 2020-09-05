import React from 'react'
import { Link } from 'react-router-dom'

export const CartTotals = ({ value }) => {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value

    return (
        <div className='cart-totals'>
            <Link to='/' onClick={() => clearCart()}>
                <span className='fas fa-times' aria-hidden='true'></span>
                Clear cart
            </Link>
            <p><span className='cart-totals-heading'>Subtotal</span>: $ {cartSubTotal}</p>
            <p><span className='cart-totals-heading'>Tax</span>: $ {cartTax}</p>
            <p><span className='cart-totals-heading'>Total</span>: $ {cartTotal}</p>
        </div>
    )
}
