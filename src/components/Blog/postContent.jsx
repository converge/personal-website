import api from '../../services/api';
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import ReactMarkdown from 'react-markdown';
import Prism from 'prismjs';
import './prism.css';
import { BlogTitle, BlogCategory } from './styles';

class PostContent extends Component {
  state = {
    posts: [],
  };

  componentDidUpdate = () => {
    Prism.highlightAll();
  };

  componentDidMount = async () => {
    Prism.highlightAll();
    const postTitle = this.props.match.params.postTitle;
    const response = await api.get('/blog/post', {
      params: {
        slug: postTitle,
      },
    });
    if (response.status === 200) {
      this.setState({
        posts: response.data,
      });
    }
  };

  render() {
    let postTitle = null;
    if (this.state.posts.title !== undefined) {
      postTitle = this.state.posts.title.replace(/-/g, ' ');
    }
    return (
      <div>
        <Helmet>
          <title>{this.state.posts.title}</title>
          <meta property="og:title" content={`João Vanzuita - ${postTitle}`} />
          <meta
            property="og:image"
            content="https://joaovanzuita.me/static/media/profile_pic.eb5e5a85.png"
          />
        </Helmet>
        <div className="content-blog-block blog-area">
          <section>
            <BlogTitle>{this.state.posts.title}</BlogTitle>
            <BlogCategory>
              Category: {`${this.state.posts.category}`}
            </BlogCategory>
          </section>
          <div className="blog-posts">
            <ReactMarkdown
              className="markdown"
              source={this.state.posts.content}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PostContent;
