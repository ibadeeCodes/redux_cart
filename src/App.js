import React, { useState, useEffect, Fragment } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import LandingPage from './components/views/LandingPage'
import Navbar from './components/layout/Navbar'
import Cart from './components/views/Cart'
import { Button, Col, Row, Layout, PageHeader, Skeleton } from 'antd'
import './App.css'
import store from './store'
import { Provider } from 'react-redux'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons'
const { Header, Footer, Sider, Content } = Layout
const { SubMenu } = Menu

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </Router>
      </Fragment>
    </Provider>
  )
}

export default App
