import React from "react"

import Layout from "../components/layout";
import Home from "../components/Home";
import Slider from "../components/Slider";
 
import SEO from "../components/seo";



/**GRAPHQL */
import { graphql } from 'gatsby';


const IndexPage = (props) => {
 const {edges} = props.data.allProjectsJson;
  return (
  <Layout>
    <SEO title="Home" />
    <article className="about--container single--container">
      <Home/>

      <Slider portfolio={edges}/>
      </article>
  </Layout>
)
}
/**GRAPHQL QUERY */
export const  query= graphql`
 { 
   
   allProjectsJson{
    edges {
      node {
        id
        title
        date
        description
        projectStack
        url
        github
        demo
        thumbnailImage {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
      
 }`

export default IndexPage
