import React, { Component } from 'react'
import { HashRouter } from 'ext-react'
import Header from './header'
import Navigation from './navigation'

export default class Viewport extends Component {
  render() {
    return <section>
      <Header />
      <Navigation />
      <main>
        <HashRouter />
      </main>
    </section>
  }
}