import React, { Component } from 'react'

export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <section className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-block">
            <p className="card-text">
              <p>I'm Lionel, Expert Full-stack JavaScript Developer.</p>
              <p>I'm interested in full-stack open source development opportunities, preferably with a front-end, especially Data Visualization & Analyses in the browser.</p>
            </p>
          </div>
        </div>
      </div>
    </section>
  }
}