import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

export default class Layout extends Component {
  render() {
    return <section className="main-container">
      <p className="container-fluid">
        <div className="profile">
          <div className="avatar">
            <img src="img/avatar.jpg" alt="Profile Photo" className="rounded-circle" width="120" height="120" />
          </div>
          <div className="bio">
            <div className="align-middle">Hi! It's Lionel, Expert Full-stack JavaScript Developer Expert.</div>
        </div>
        </div>
        <nav className="row">
          <IndexLink to="/" className="col-sm-3" activeClassName="font-weight-bold">Post</IndexLink>
          <Link to="/about" className="col-sm-3 text-sm-center" activeClassName="font-weight-bold">About Me</Link>
          <Link to="/resume" className="col-sm-3 text-sm-center" activeClassName="font-weight-bold">Resume</Link>
          <Link to="/project" className="col-sm-3 text-sm-right" activeClassName="font-weight-bold">Project</Link>
        </nav>
      </p>
      <main>
        {this.props.children}
      </main>
    </section>
  }
}