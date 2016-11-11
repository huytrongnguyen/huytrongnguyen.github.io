import React, { Component } from 'react'
import $ from 'jquery'
import ReactMarkdown from 'react-markdown'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      posts: [],
      dateOptions: {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
      }
    }
  }

  render() {
    const { posts, dateOptions } = this.state
    return <section className="row">
      <div className="col-sm-4">
        <div className="card">
          <h4 className="card-header">Intro</h4>
          <div className="card-block">
            <p className="card-text">
              I'm Lionel, Frontend Developer Expert at <a href="http://kms-technology.com">KMS Technology</a> and a trainer in KMS Launch Program.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-8">
        {posts.map(post => <div className="card">
          <div className="card-block">
            <p className="card-text">
              <p>
                <h5>{post.title}</h5>
                {new Date(post.time).toLocaleTimeString("en-us", dateOptions)}
              </p>
              <ReactMarkdown source={post.content} />
            </p>
          </div>
        </div>)}
      </div>
    </section>
  }

  async componentDidMount() {
    const posts = await $.ajax('posts/index.json')
    for (var post of posts) {
      post.content = await $.ajax('posts/' + post.content + '.md')
    }
    this.setState({ posts })
  }
}