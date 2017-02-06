import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import Layout from './layout'
import Home from './home'
import About from './about'
import Resume from './resume'
import Project from './project'

export default class Routes extends Component {
  render() {
    return <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="resume" component={Resume} />
        <Route path="project" component={Project} />
        <Route path="*" component={Home} />
      </Route>
    </Router>
  }
}