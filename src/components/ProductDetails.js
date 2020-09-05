import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import './ProductDetails.css'

export default class ProductDetails extends Component {
    render () {
        return (
            <ProductConsumer>
                {(value) => {
                    const { id, img, info, price, title, inCart } = value.detailProduct
                    return (
                        <div className='container'>
                            <div className='columns'>
                                <figure>
                                    <img src={img} className='product-image' alt='Product' />
                                </figure>
                                <section className='product-info-col'>
                                    <p className='product-info-title'>{title}</p>
                                    <p className='product-info-title'><span>$</span>{price}</p>
                                    <p className='product-info-description'>{info}</p>
                                    <div className='btn-details-box'>
                                        <button
                                            className={inCart ? 'btn-contrast-disabled btn-margin-top' : 'btn-contrast btn-margin-top'}
                                            disabled={!!inCart}
                                            onClick={() => {
                                                value.addToCart(id)
                                                value.openModal(id)
                                            }}>
                                            {inCart ? 'In Cart' : 'Add to cart'}
                                        </button>
                                        <Link to='/' className='btn-margin-left'>Back to products</Link>
                                    </div>
                                </section>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}
