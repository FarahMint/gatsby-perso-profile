import React from 'react';
import Navbar from "./Navbar";
import {Link} from "gatsby";

import {FaRegEnvelope} from "react-icons/fa"

export default function Header({menuLinks, siteTitle}) {
    return (
        <header>
            <div className="nav-link home-link">
            <Link 
              activeClassName="active"
                to="/">
                    far<br/>ah<br/>
              </Link>
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
