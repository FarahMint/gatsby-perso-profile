import React from 'react';
import {Link} from "gatsby";


const Navbar = ({ siteTitle, menuLinks }) => (
 <>
      <nav className="main-nav">
        <ul style={{ display: "flex", flex: 1 }}>
                {menuLinks.map(item => (
          <li key={item.name}
               >
              <Link 
              activeClassName="active"
                to={item.link}>{item.name}
              </Link>
            </li>
                ))}
          </ul>
        </nav>
      
        </>
  )

  export default Navbar;