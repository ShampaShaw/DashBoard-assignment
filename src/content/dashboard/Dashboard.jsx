import React from 'react'
import './dashboard.css'
import { FcBullish } from "react-icons/fc";
import { FcBearish } from "react-icons/fc";
import cart from '../../assests/cart.png'
import customer from '../../assests/customer.png'
import product from '../../assests/product.png'

function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='container'>
        <div className='salesBox'>
          <div className='logo'>
            <img src={cart} alt='cart' />
          </div>
          <div className='title'>Sales</div>
          <div className='number'>60</div>
          <div className='icon'><FcBullish />      60% from Last Year</div>
        </div>
        <div className='customer'>
          <div className='logo'><img src={customer} alt='' /></div>
          <div className='title'>New Customer</div>
          <div className='number'>50</div>
          <div className='icon'><FcBearish/>      20% from Last Year</div>
        </div>
        <div className='product'>
          <div className='logo'><img src={product} alt='' /></div>
          <div className='title'>Top Selling Product</div>
          <h1 className='productName'>Laptop</h1>
        </div>
      </div>
    </div>
  )
}

export default Dashboard