import * as React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import PostContent from '../components/Blog/postContent';
import HeaderPost from '../components/Header/headerPost';

const Base = ({ data }) => (
  <div>
    <Helmet>
      <title>João Vanzuita - Full Stack Developer</title>
    </Helmet>
    <div className="app">
      <div className="container">
        <HeaderPost/>
        <aside>
          <PostContent blogPost={ data }/>
        </aside>
        <footer/>
      </div>
    </div>
  </div>
);

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