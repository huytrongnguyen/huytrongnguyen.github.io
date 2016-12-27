import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

export default class Layout extends Component {
  render() {
    return <section className="main-container">
      <p>
        <div className="profilePic">
          <img src="img/avatar.jpg" alt="Profile Photo" className="img-thumbnail" width="168" height="168" />
        </div>
        <h3 className="text-sm-center">Lionel Nguyen</h3>
        <div className="row">
          <IndexLink to="/" className="col-sm-3 text-sm-left" activeClassName="font-weight-bold">Post</IndexLink>
          <Link to="/about" className="col-sm-3 text-sm-center" activeClassName="font-weight-bold">About Me</Link>
          <Link to="/contact" className="col-sm-3 text-sm-center" activeClassName="font-weight-bold">Contact</Link>
          <Link to="/resume" className="col-sm-3 text-sm-right" activeClassName="font-weight-bold">Resume</Link>
        </div>
      </p>
      <main>
        {this.props.children}
      </main>
    </section>
  }
}