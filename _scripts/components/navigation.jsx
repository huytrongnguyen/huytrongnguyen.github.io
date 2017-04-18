import React, { Component } from 'react'
import { Link } from 'ext-react'

export default class Navigation extends Component {
  render() {
    return <ul className="nav nav-tabs nav-fill">
      <li className="nav-item">
        <Link to="/" className="nav-link">Post</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">About Me</Link>
      </li>
      <li className="nav-item">
        <Link to="/resume" className="nav-link">Resume</Link>
      </li>
      <li className="nav-item">
        <Link to="/project" className="nav-link">Project</Link>
      </li>
    </ul>
  }
}