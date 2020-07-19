import React, { useState, Fragment } from 'react'
import { connect } from 'react-redux'
import { Icon, Col, Row, message, Badge } from 'antd'
import { addToCart } from '../../actions/cartAction'
import { useHistory } from 'react-router-dom'

//Ant Design utilities..
import { Skeleton, Switch, Card, Avatar } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
const { Meta } = Card

const ProductItem = ({ products, loading, addToCart }) => {
  const history = useHistory()

  const key = 'updatable'

  const openMessage = () => {
    message.loading({ content: 'Adding...', key })
    setTimeout(() => {
      message.success({ content: 'Product Added!', key, duration: 2 })
    }, 1000)
  }

  return (
    products.length > 0 &&
    products.map((prod) => {
      return (
        <Col lg={6} md={8} s={12} xs={24}>
          <Card
            key={prod.id}
            style={{
              width: 300,
              marginTop: 80,
            }}
            actions={[
              <ShoppingCartOutlined
                onClick={() => {
                  openMessage()
                  addToCart({
                    id: prod.id,
                    name: prod.name,
                    quantity: 1,
                    price: prod.price,
                    totalPrice: prod.price,
                  })
                  setTimeout(() => {
                    history.push('/cart')
                  }, 700)
                }}
                style={{ fontSize: '1.5rem' }}
              />,
            ]}
          >
            <Skeleton loading={loading} avatar active>
              {/* <Badge
                className='site-badge-count-109'
                count={200}
                style={{ backgroundColor: '#52c41a' }}
              /> */}
              <Meta
                avatar={
                  <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
                }
                title={prod.name}
                description={'$' + prod.price}
              />
            </Skeleton>
          </Card>
        </Col>
      )
    })
  )
}

export default connect(null, { addToCart })(ProductItem)
