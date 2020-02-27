/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"


import HeaderSection from "./HeaderSection"
 
import "./layout.css"
import { StaticQuery, graphql } from "gatsby"

 
const Layout = ({ children }) => {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  
  return (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
              menuLinks {
                name
                link
              }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
     
        <HeaderSection
        menuLinks={data.site.siteMetadata.menuLinks} siteTitle={data.site.siteMetadata.title} />
        {children}
  
      </React.Fragment>
    )}
  />

)
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
