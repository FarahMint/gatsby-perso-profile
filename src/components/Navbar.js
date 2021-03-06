import React from 'react';
// import {Link} from "gatsby";
// import TransitionLink from "gatsby-plugin-transition-link"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import {FaHome} from "react-icons/fa"
 
const Navbar = ({ siteTitle, menuLinks }) =>{ 
  return(
 <>
      <nav className="main-nav">
        <ul style={{ display: "flex", flex: 1 }}>
                {menuLinks.map(item => (
          <li key={item.name}
               >
              <AniLink
             
               paintDrip
                to={item.link} hex="#FF3E55"
                activeClassName="active"
                >
                  
               {item.name === "home" ?<FaHome /> : item.name}
              </AniLink>
              {/* <Link 
              activeClassName="active"
                to={item.link}>{item.name}
              </Link> */}
            </li>
                ))}
          </ul>
        </nav>
      
        </>
  )
}
  export default Navbar;