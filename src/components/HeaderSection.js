import React from 'react';
import Navbar from "./Navbar";
// import {Link} from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink"

import {FaRegEnvelope} from "react-icons/fa"

export default function HeaderSection({menuLinks, siteTitle}) {
    return (
        <header>
            <div className="nav-link home-link">
            <AniLink
             
             paintDrip
              to="/" hex="#FF3E55"
              text="test"
              duration={1}
              activeClassName="active"
              >
             far<br/>ah<br/>
            </AniLink>
            {/* <Link 
              activeClassName="active"
                to="/">
                    far<br/>ah<br/>
              </Link> */}
                </div>
            <div className="nav-link mail-link">
                <a href="mailto:zhfarah@gmail.com">
                    <FaRegEnvelope className="icon-envelop"/>
                </a>
               
            </div>

        <Navbar
          menuLinks={menuLinks} siteTitle={siteTitle}/>
      
        </header>
    )
}
