import React, { Component } from 'react'
import { HashRouter, Link } from 'ext-react'

export default class Viewport extends Component {
  render() {
    return <section className="d-flex flex-column">
      <div className="d-flex flex-row">
        <header>
          <div className="profile">
            <div className="avatar text-sm-center">
              <img src="img/avatar.jpg" alt="Profile Photo" className="rounded-circle" width="48" height="48" />
            </div>
            <div className="bio">
              <div className="inner">
                <strong>Lionel Nguyen</strong><br />
                Senior Data Visualization Developer
              </div>
            </div>
          </div>
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><Link to="/" className="nav-link">Post</Link></li>
              <li className="list-group-item"><Link to="/about" className="nav-link">About Me</Link></li>
              <li className="list-group-item"><Link to="/resume" className="nav-link">Resume</Link></li>
              <li className="list-group-item"><Link to="/project" className="nav-link">Project</Link></li>
            </ul>
          </div>
        </header>
        <main className="d-flex flex-column">
          <HashRouter />
        </main>
      </div>
    </section>
  }
}