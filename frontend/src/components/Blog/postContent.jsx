import React from 'react';
import {Helmet} from 'react-helmet';
import {BlogTitle, BlogCategory} from './styles';

const PostContent = ({blogPost}) => {

  const title = blogPost.markdownRemark.frontmatter.title;
  const category = blogPost.markdownRemark.frontmatter.category;
  const content = blogPost.markdownRemark.html;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={`João Vanzuita - ${title}`}/>
        <meta
          property="og:image"
          content="https://joaovanzuita.me/static/media/profile_pic.eb5e5a85.png"
        />
      </Helmet>
      <div className="content-blog-block blog-area">
        <section>
          <BlogTitle>{title}</BlogTitle>
          <BlogCategory>
            Category: {`${category}`}
          </BlogCategory>
        </section>
        <div className="blog-posts">
          <section dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </>
  )
};

export default PostContent;
