import React, { Component } from 'react'

export default class About extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <section className="row">
      <div className="col-sm-12">
        <div className="card">
          <h4 className="card-header">
            About
          </h4>
          <div className="card-block">
            <p className="card-text">
              <div>Software technology professional well versed in multiple platforms focused on building robust web applications while leveraging proven industry best practices. Always open to learning new technologies, languages, platforms, primarily interested in working with a strong team focused on delivering working software to clients.</div>
              <div>I'm interested in full-stack open source development opportunities, preferably with a front-end, especially Data Visualization & Analyses in the browser.</div>
              <dl>
                <dt>Front-End Specialties:</dt>
                <dd>SPA, HTML5, CSS3, SASS, JavaScript, jQuery, AngularJS, ReactJS, Bower, Gulp, NodeJS, NPM, ExpressJS, Twitter Bootstrap, etc...</dd>
                <dt>Java/Open Source Specialties:</dt>
                <dd>Java 8, J2EE, Spring Boot, Hibernate, MySQL, Maven, JUnit, Mockito, Tomcat, Dropwizard, Elasticsearch, Cassandra, etc...</dd>
                <dt>Microsoft/.NET Specialties:</dt>
                <dd>C#, ASP.NET Core, LINQ, EF, SQL Server, etc...</dd>
              </dl>
            </p>
          </div>
        </div>
      </div>
    </section>
  }
}