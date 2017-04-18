import React, { Component } from 'react'
import { Route } from 'ext-react'

@Route('/about')
export default class About extends Component {
  render() {
    return <section className="card">
      <div className="card-block">
        <p className="card-text">
          <p>Hi, it's Lionel, Expert Full-stack JavaScript Developer.</p>
          <p>I'm interested in full-stack open source development opportunities, preferably with a front-end, especially Data Visualization & Analyses in the browser.</p>
        </p>
      </div>
    </section>
  }
}