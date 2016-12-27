import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <section className="row">
      <div className="col-sm-12">
        <div className="card">
          <div className="card-block">
            <p className="card-text">
              <address>
                <strong>Nguyen Trong Huy</strong><br />
                435/26 Le Van Tho, Ward 9<br />
                Go Vap District, HCMC<br />
                <abbr>Phone:</abbr>(84)905195462<br />
                <abbr>Email:</abbr>huynguyen8505@gmail.com<br />
                <abbr>Facebook:</abbr><a href="https://www.facebook.com/huynguyen8505">https://www.facebook.com/huynguyen8505</a><br />
                <abbr>Github:</abbr><a href="https://github.com/huytrongnguyen">https://github.com/huytrongnguyen</a><br />
              </address>
            </p>
          </div>
        </div>
      </div>
    </section>
  }
}