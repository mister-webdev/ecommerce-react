import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import './Navbar.css'
import logo from '../assets/logo.svg'

export default class Navbar extends Component {
    render () {
        return (
            <ProductConsumer>
                {value => (
                    <header className='navbar'>
                        <div className='navbar-wrapper'>
                            <Link to='/' className='logo' >
                                <img src={logo} alt='Shop logo' />
                            </Link>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <Link to='/' className='nav-link'>
                                        Products
                                    </Link>
                                </li>
                            </ul>
                            <Link to='/cart' className='navbar-cart'>
                                <i className='fas fa-shopping-cart' />
                                <span className='navbar-cart-qty'>
                                    <span className='qty-digit'>{value.cart.length}</span>
                                </span>
                            </Link>
                        </div>
                    </header>
                )}
            </ProductConsumer>
        )
    }
}
