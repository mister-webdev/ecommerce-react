import React, { Component } from 'react'
import ProductListItem from './ProductListItem'
import { ProductConsumer } from '../context'
import './Product.css'

export default class Productlist extends Component {
    render () {
        return (
            <div className='product-wrapper'>
                <ProductConsumer>
                    {value => {
                        return value.products.map(product => {
                            return <ProductListItem
                                key={product.id}
                                product={product} />
                        })
                    }}
                </ProductConsumer>
            </div>

        )
    }
}
