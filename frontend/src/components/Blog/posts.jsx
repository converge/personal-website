import React, {useState, useEffect} from 'react'
import {Link} from 'gatsby';
import {HashLoader} from 'react-spinners'
import './style.css'

const Blog = ({blogPosts}) => {
  const [isLoading, setIsLoading] = useState(true);

  const postsList = blogPosts.map((post) => (
    <li key={post.node.id}><Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link></li>
  ))

  useEffect(() => {
    (postsList.length > 0) ? setIsLoading(false) : setIsLoading(true);
  }, [postsList]);

  return (
    <div className="content-block blog-area">
      {console.log(postsList)}
      <section>
        <p className="title-bar">BLOG</p>
      </section>
      <div className="spinner">
        <HashLoader
          className="override"
          sizeUnit={"px"}
          size={75}
          color={'#f2da34'}
          loading={isLoading}
        />
      </div>
      <div className="blog-posts">
        <ul>
          {postsList}
        </ul>
      </div>
    </div>
  )
}

export default Blog;