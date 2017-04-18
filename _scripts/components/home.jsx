import React, { Component } from 'react'
import $ from 'jquery'
import ReactMarkdown from 'react-markdown'
import { Route } from 'ext-react'

@Route('/')
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
    return <section className="list-group">
      {posts.map(post => <article className="list-group-item">
        <h4>{post.title}</h4>
        <small className="mb-1">{new Date(post.time).toLocaleTimeString("en-us", dateOptions)}</small>
        <ReactMarkdown source={post.content} />
      </article>)}
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