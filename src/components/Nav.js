import React from "react";
import Winclogo from './pics/winclogo.png'
import HomeIcon from './pics/homeIcon.png'
import { Link } from "react-router-dom";

const Nav = props => {
  return ( 
    <div className="Nav">

          <Link to="/">
              <img src={Winclogo} alt="Winclogo" width="135px" className="wincLogo"/>
              </Link>
        <Link to="/">
          <img src={HomeIcon} alt="homeIcon" width="50px" className="homeIcon"/>
        </Link>
      <h1>Winc's Student-Dashboard 2021</h1>
    </div>
   );
  
};
    

export default Nav;
