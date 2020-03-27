import React from 'react';
import profilePic from '../../imgs/profile_pic.png';

const Header = () => (
  <header>
    <div className="content-block profile-pic-area">
      <img src={profilePic} alt="João Vanzuita"/>
    </div>
  </header>
);

export default Header;