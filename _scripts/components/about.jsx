import React, { Component } from 'react'
import { Route } from 'ext-react'

@Route('/about')
export default class About extends Component {
  render() {
    return <section className="card">
      <div className="card-block">
        <p className="card-text">
          <p>Software technology professional well versed in multiple platforms focused on building robust web applications while leveraging proven industry best practices. Always open to learning new technologies, languages, platforms, primarily interested in working with a strong team focused on delivering working software to clients.</p>
          <p>I'm interested in full-stack open source development opportunities, preferably with a front-end focus on UI architecture, development leveraging ReactJS and RESTful JSON based web services, especially Data Visualization & Analysis in the browser.</p>
        </p>
      </div>
    </section>
  }
}