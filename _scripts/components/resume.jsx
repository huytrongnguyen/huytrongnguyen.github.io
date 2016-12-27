import React, { Component } from 'react'

export default class Resume extends Component {
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
                <dt>Front-End Specialties:</dt>
                <dd>SPA, HTML5, CSS3, SASS, JavaScript, jQuery, AngularJS, ReactJS, Bower, Gulp, NodeJS, NPM, ExpressJS, Twitter Bootstrap, etc...</dd>
                <dt>Java/Open Source Specialties:</dt>
                <dd>Java 8, J2EE, Spring Boot, Hibernate, MySQL, Maven, JUnit, Mockito, Tomcat, Dropwizard, Elasticsearch, Cassandra, etc...</dd>
                <dt>Microsoft/.NET Specialties:</dt>
                <dd>C#, ASP.NET Core, LINQ, EF, SQL Server, etc...</dd>
              </dl>
              <p>You can download my CV here:</p>
              <a href="/resume.pdf" className="btn btn-secondary">My CV</a><br />
            </p>
          </div>
        </div>
      </div>
    </section>
  }
}