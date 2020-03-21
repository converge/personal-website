import React from 'react';
import {graphql} from 'gatsby';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {Helmet} from 'react-helmet';
import {
  faPlusCircle,
  faListOl,
  faTrashAlt,
  faEdit,
} from '@fortawesome/free-solid-svg-icons';
import Base from '../components/Base'


export default ({data}) => {
  const {edges} = data.allMarkdownRemark;

  return (
    <>
      <Helmet>
        <title>João Vanzuita - Full Stack Developer</title>
      </Helmet>
      <Base blogPosts={edges}/>
    </>
  )
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

// add icons
library.add(fab, faPlusCircle, faListOl, faTrashAlt, faEdit);