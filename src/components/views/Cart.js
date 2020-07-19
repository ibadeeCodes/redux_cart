import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { Table } from 'antd'

import { Result, Empty, message, Popconfirm, Button, Modal } from 'antd'
import { Link } from 'react-router-dom'

import {
  deleteFromCart,
  incrementItem,
  decrementItem,
  clearCart,
} from '../../actions/cartAction'
import '../views/Cart.scss'

import { DownOutlined, UpOutlined, ShoppingOutlined } from '@ant-design/icons'

const Cart = ({
  cart: { cartItems, loading },
  deleteFromCart,
  incrementItem,
  decrementItem,
  clearCart,
}) => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    calculateTotal(cartItems)
  })

  if (loading || cartItems === null) {
    return <div>loading...</div>
  }

  const key = 'updatable'

  const openMessage = () => {
    message.loading({ content: 'Removing..', key })
    setTimeout(() => {
      message.success({ content: 'Product Removed!', key, duration: 2 })
    }, 1000)
  }

  const Confirmtext = 'Are you sure you want to clear the cart?'

  const clearCartHandler = () => {
    clearCart()
  }

  const success = () => {
    Modal.success({
      content: 'Payment Sucessfull!',
    })
    clearCart()
  }

  // Table Column
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
    { title: '$ Unit Price', dataIndex: 'price', key: 'price' },
    { title: '$ Total Price', dataIndex: 'totalPrice', key: 'totalPrice' },
    {
      title: '',
      dataIndex: '',
      key: '',
      render: (
        item,
        record //the second argument record is that particular item inside the array!  ( got it!)
      ) => (
        <Fragment>
          <a
            style={{ color: 'red' }}
            onClick={(e) => {
              setTimeout(() => {
                deleteFromCart(record.id)
              }, 500)
              openMessage()
            }}
          >
            Remove
          </a>
          <a className='cart__more'>
            <UpOutlined
              onClick={() => {
                incrementItem(record.id)
              }}
            />
          </a>
          <a className='cart__less'>
            <DownOutlined
              onClick={() => {
                decrementItem(record.id)
              }}
            />
          </a>
        </Fragment>
      ),
    },
  ]

  const calculateTotal = (cartItems) => {
    let total = 0
    cartItems.map((item) => {
      total += parseInt(item.totalPrice, 10)
    })

    setTotal(total)
  }

  return cartItems.length > 0 ? (
    // cartItemRender
    <div className='container'>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2 style={{ marginTop: '2rem' }}>
          Total Amount: <span style={{ fontSize: '2rem' }}>${total}</span>
        </h2>
        <Popconfirm
          placement='leftTop'
          title={Confirmtext}
          onConfirm={clearCartHandler}
          okText='Yes'
          cancelText='No'
        >
          <Button danger>Clear Cart</Button>
        </Popconfirm>
      </div>
      <Table
        style={{ marginTop: '2rem' }}
        columns={columns}
        dataSource={cartItems}
      />
      <Link to='/'>Back To Shop</Link>
      <Button
        type='primary'
        icon={<ShoppingOutlined />}
        size='large'
        style={{ display: 'block', marginTop: '1rem' }}
        onClick={success}
      >
        CheckOut
      </Button>
    </div>
  ) : (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: '6rem',
      }}
    >
      <br />
      <Empty description={false} />
      <p style={{ textAlign: 'center' }}>No Items In the Cart</p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart,
})

export default connect(mapStateToProps, {
  deleteFromCart,
  incrementItem,
  decrementItem,
  clearCart,
})(Cart)
