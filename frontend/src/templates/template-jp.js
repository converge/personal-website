import React from 'react';
import PostContent from '../components/Blog/postContent'
import Header from '../components/Header';
import {graphql} from "gatsby";
import {Helmet} from "react-helmet";

const Base = ({data}) => {
  return (
    <>
      <Helmet>
        <title>João Vanzuita - Full Stack Developer</title>
      </Helmet>
      <div className="app">
        <div className="container">
          <Header/>
          <aside>
            <PostContent blogPost={data}/>
          </aside>
          <footer/>
        </div>
      </div>
    </>
  )
};

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        id
        excerpt(pruneLength: 160)
        html
        frontmatter {
          title,
          category
        }
      }
    }
`

export default Base;