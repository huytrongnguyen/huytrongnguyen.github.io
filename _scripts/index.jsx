import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Layout from './components/layout'
import Home from './components/home'
import About from './components/about'

global.jQuery = require('jquery')
global.Tether = require('tether')

render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="*" component={Home} />
    </Route>
  </Router>
), document.getElementById('react-root'))