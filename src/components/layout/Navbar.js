import React, { useEffect } from 'react'
import { Menu, Badge } from 'antd'
import Icon from '@ant-design/icons'
import './Navbar.scss'
import '../../App.css'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ShoppingCartOutlined } from '@ant-design/icons'

const Navbar = ({ cart: { cartItems } }) => {
  return (
    <nav className='menu'>
      <div className='container'>
        <div className='menu__container'>
          <div className='menu__logo' style={{ fontWeight: 'bold' }}>
            <Link to='/'>Redux-Shop</Link>
          </div>
          <Menu>
            <Menu.Item key='cart' style={{ paddingBottom: 3 }}>
              <Link to='/cart'>
                <Badge count={cartItems.length}>
                  <ShoppingCartOutlined style={{ fontSize: '1rem' }} />
                </Badge>
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(Navbar)
