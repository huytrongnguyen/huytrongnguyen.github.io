import React, { Component } from 'react'

export default class Project extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <section className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-block">
            <p className="card-text">
              <dl>
                <dt>Utility Components and Services for React:</dt>
                <dd><a href="https://www.npmjs.com/package/rc-lazy">https://www.npmjs.com/package/rc-lazy</a></dd>
                <dd>
                  Features:
                  <ul>
                    <li>Building Data-Driven React Application</li>
                    <li>Storing Data Locally In The Browser</li>
                    <li>Event Handling Mechanism For Globally Named Events</li>
                    <li>Routing Library For React</li>
                  </ul>
                </dd>
                <dt>Building Data-Driven React Application:</dt>
                <dd><a href="https://www.npmjs.com/package/rc-model">https://www.npmjs.com/package/rc-model</a></dd>
                <dd>Separated from rc-lazy</dd>
              </dl>
            </p>
          </div>
        </div>
      </div>
    </section>
  }
}