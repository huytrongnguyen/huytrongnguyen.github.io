import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

export default class Layout extends Component {
  render() {
    return <section className="main-container">
      <p>
        <img src="img/cover.jpg" alt="Cover Image" />
        <nav className="navbar navbar-light">
          <span className="col-sm-3" />
          <IndexLink to="/" className="nav-link col-sm-2" activeClassName="active font-weight-bold">Post</IndexLink>
          <Link to="/about" className="nav-link col-sm-2" activeClassName="active font-weight-bold">About</Link>
        </nav>
        <div className="profilePic">
          <img src="img/avatar.jpg" alt="Profile Photo" className="img-thumbnail" width="168" height="168" />
        </div>
      </p>
      <main>
        {this.props.children}
      </main>
    </section>
  }
}