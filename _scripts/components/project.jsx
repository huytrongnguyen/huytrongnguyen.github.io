import React, { Component } from 'react'
import { Route } from 'ext-react'

@Route('/project')
export default class Project extends Component {
  render() {
    return <section className="d-flex flex-column jumbotron">
      <h4>Project</h4>
      <dl>
        <dt>Building Data-Driven React Application:</dt>
        <dd><a href="https://www.npmjs.com/package/rc-model">https://www.npmjs.com/package/rc-model</a></dd>
        <dt>Utility Components and Services for React:</dt>
        <dd><a href="https://www.npmjs.com/package/ext-react">https://www.npmjs.com/package/ext-react</a></dd>
        <dd>
          Features:
          <ul>
            <li>Construct and launch the app</li>
            <li>Screen Navigation</li>
            <li>Manage application state</li>
            <li>Container Components</li>
            <li>Observer pattern</li>
            <li>Separation of Concerns</li>
          </ul>
        </dd>
      </dl>
    </section>
  }
}