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
      current: ''
    }
  }

  render() {
    const { posts, current, dateOptions } = this.state
    return <section className="d-flex flex-column">
      <div id="accordion">
      {posts.map((post, index) => <article className="card">
        <div className="card-header">
          <h4><a href="javascript:void(0)" onClick={() => this.loadContent(index)}>{post.title}</a></h4>
        </div>
        {post.content === current && <div className="card-body">
          <h6><small>{post.time}</small></h6>
          <ReactMarkdown source={post.detail} />
        </div>}
      </article>)}
      </div>
    </section>
  }

  async componentDidMount() {
    const posts = await $.ajax('posts/index.json'),
          post = posts[0],
          current = post.content

    post.detail = await $.ajax('posts/' + post.content + '.md')
    this.setState(() => ({ posts, current }))
  }

  async loadContent(index) {
    const { posts } = this.state,
          post = posts[index],
          current = post.content

    if (!post.detail) {
      post.detail = await $.ajax('posts/' + post.content + '.md')
    }

    this.setState(() => ({ posts, current }))
  }
}