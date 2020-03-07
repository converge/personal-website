import profilePic from "../../imgs/profile_pic.png";
import React from "react";

const Header = () => (
  <header>
    <div className="content-block profile-pic-area">
      <img src={profilePic} alt="João Vanzuita"/>
    </div>
  </header>
);

export default Header;