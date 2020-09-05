import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'
import './normalize.css'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import ProductDetails from './components/ProductDetails'
import ProductList from './components/ProductList'
import Default from './components/Default'
import Modal from './components/Modal'


function App () {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ProductList}></Route>
        <Route path='/details' component={ProductDetails}></Route>
        <Route path='/cart' component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>
      <Modal />
    </>
  )
}

export default App
