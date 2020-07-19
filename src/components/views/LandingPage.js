import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../actions/productActions'
import '../../App.css'
import ProductItem from './productItem'
import { Icon, Col, Card, Row, Spin, Space } from 'antd'
import { Skeleton, Switch, Avatar } from 'antd'

const LandingPage = ({ product: { products, loading }, getProducts }) => {
  useEffect(() => {
    getProducts()
    //eslint-disable-next-line
  }, [])

  if (loading || products === null) {
    return (
      <div className='container'>
        <Space
          size='middle'
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '15rem',
          }}
        >
          <Spin size='large' />
        </Space>
      </div>
    )
  }

  return (
    <div className='container'>
      <Row gutter={[10, 24]}>
        <ProductItem products={products} loading={loading} />
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  product: state.product,
})

export default connect(mapStateToProps, { getProducts })(LandingPage)
