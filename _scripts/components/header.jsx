import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return <header>
      <div className="profile">
        <div className="avatar text-sm-center">
          <img src="img/avatar.jpg" alt="Profile Photo" className="rounded-circle" width="120" height="120" />
        </div>
        <div className="bio align-middle">Hi! It's Lionel, Principal Full-stack Web Developer.</div>
      </div>
    </header>
  }
}