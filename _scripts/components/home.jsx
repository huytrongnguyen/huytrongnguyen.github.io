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
    return <section>
      {posts.map(post => <div className="card">
        <div className="card-header">
          <h5 className="mb-0">{post.title}</h5>
        </div>
          <div className="card-block">
            <p className="card-text">
              <p>
                {new Date(post.time).toLocaleTimeString("en-us", dateOptions)}
              </p>
              <ReactMarkdown source={post.content} />
            </p>
          </div>
      </div>)}
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