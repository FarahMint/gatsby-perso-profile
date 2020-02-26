import React from "react";
import Img from 'gatsby-image';
import {Link} from "gatsby";

import Layout from "../components/layout";


/**GRAPHQL */
import { graphql } from 'gatsby';


const WorkPage = (props) =>{ 
  
  const {edges} = props.data.allProjectsJson;
 
   return (
    <Layout>
      <div className="work--grid">

  
{ edges.map((project) => (

     <div className="project" 
      key={project.node.id}
     >
      <Link to={`/work/${project.node.title}`}>
        <div  className="img-container" >
          <Img 
          fluid={project.node.thumbnailImage.childImageSharp.fluid} /> 
          
          <div className="overlay__stack"></div>
        </div>

        <div className="descr">
          <h4 className="project-title">{project.node.title}</h4>
        </div>  
        </Link> 
    </div>
     ))} 
         </div>
    </Layout>
)}



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


export default WorkPage
