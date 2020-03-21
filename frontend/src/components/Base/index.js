import React from 'react';
import Header from "../Header";
import AsideContent from "../AsideContent/";
import 'prismjs/prism';

const Base = ({blogPosts}) => (
    <div className="app">
      <div className="container">
        <Header/>
        <aside>
          <AsideContent blogPosts={blogPosts} />∏
        </aside>
        <footer/>
      </div>
    </div>
);

export default Base;
