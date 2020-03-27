import React from 'react';
import { shallow } from 'enzyme';
import Posts from '../components/Blog/posts';

describe('Posts Content', () => {
  it('Should pass blog posts to the component', () => {
    // mock
    const blogPosts = [{
      node: {
        id: 1,
        fields: {
          slug: 'home',
        },
        frontmatter: {
          title: 'home page',
        },
      },
    }];
    shallow(<Posts blogPosts={blogPosts} />);
  });
});
