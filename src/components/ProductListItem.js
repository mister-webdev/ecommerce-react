import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import './Product.css'
import PropTypes from 'prop-types'

export default class ProductListItem extends Component {
    render () {
        const { id, title, img, price, inCart } = this.props.product
        return (
            <div className='card'>
                <ProductConsumer>
                    {value => (
                        <div
                            className='img-container'
                            onClick={() => value.handleDetail(id)}>
                            <Link to='/details'>
                                <img src={img} alt='Product' className='product-img' />
                            </Link>
                            <button
                                className='cart-btn'
                                disabled={!!inCart}
                                onClick={() => {
                                    value.addToCart(id)
                                    value.openModal(id)
                                }}>
                                {inCart ?
                                    (<i className='fas fa-check' role='presentation' title='In cart' />) :
                                    (<i className='fas fa-cart-plus' role='presentation' title='Add to cart' />)}
                            </button>
                        </div>
                    )}
                </ProductConsumer>
                <footer className="card-footer">
                    <p className="product-title">{title}</p>
                    <p className="product-price"><i className='fas fa-dollar-sign' aria-label='Dollar' /> {price}</p>
                </footer>
            </div>
        )
    }
}

ProductListItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}
