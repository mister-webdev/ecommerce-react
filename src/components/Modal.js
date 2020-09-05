import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import './Modal.css'

export default class Modal extends Component {
    render () {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value
                    const { img, title, price } = value.modalProduct

                    if (!modalOpen) {
                        return null
                    } else {
                        return (
                            <div className='modal'>
                                <div className='modal-content'>
                                    <p className='modal-heading'>Item added to cart</p>
                                    <img src={img} className='modal-img' alt='Product' />
                                    <p className='modal-product-title'>{title}</p>
                                    <p className='modal-product-price'>Price: ${price}</p>
                                    <div className='btn-box'>
                                        <Link to='/'>
                                            <button className='btn-contrast' onClick={() => closeModal()}>
                                                Continue shopping
                                        </button>
                                        </Link>
                                        <Link to='/cart'>
                                            <button className='btn-contrast btn-margin-left' onClick={() => closeModal()}>
                                                Go to cart
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                }}
            </ProductConsumer>
        )
    }
}
