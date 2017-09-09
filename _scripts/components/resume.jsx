import React, { Component } from 'react'
import { Route } from 'ext-react'

@Route('/resume')
export default class Resume extends Component {
  render() {
    return <section className="d-flex flex-column jumbotron">
      <h4>Resume</h4>
      <dl>
        <dt>Front-End Specialties:</dt>
        <dd>SPA, HTML5, CSS3, SASS, JavaScript, jQuery, AngularJS, ReactJS, Bower, Gulp, NodeJS, NPM, ExpressJS, Twitter Bootstrap, D3, etc...</dd>
        <dt>Java/Open Source Specialties:</dt>
        <dd>Java 8, J2EE, Spring Boot, Hibernate, MySQL, Maven, JUnit, Mockito, Tomcat, Dropwizard, Elasticsearch, Cassandra, etc...</dd>
        <dt>Microsoft/.NET Specialties:</dt>
        <dd>C#, ASP.NET Core, LINQ, EF, SQL Server, etc...</dd>
      </dl>
      <p>You can download my CV here:</p>
      <a href="/resume.pdf" className="btn btn-secondary btn-download">My CV</a><br />
    </section>
  }
}