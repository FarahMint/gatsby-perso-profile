import React from "react";
import Layout from "../components/layout"
import SocialMedia from "../components/SocialMedia"

import {FaReact, FaVuejs, FaHtml5, FaCss3Alt, FaSass } from "react-icons/fa"
import {IoLogoJavascript } from "react-icons/io"
import Img from "gatsby-image"
/**GRAPHQL */
import { graphql } from 'gatsby';

const AboutPage = ({data}) => {
  return(
<Layout>
  <article className="about--container single--container">
    <section className="bio">
      <div className="bio-text">
        <h3>my story</h3>  
        <p>
        I am a Front-End Developer passionate about human-computer interaction, its constant development and how it shapes our lives.</p>

      </div>


      <Img 
      className="avatar"
      fluid={data.poster.childImageSharp.fluid}
      />
  


      <div className="stack-animation">
        <div> <FaHtml5/></div>
        <div><FaCss3Alt/></div>
        <div><FaSass/></div>
        <div><IoLogoJavascript/></div>
        <div><FaReact/></div>
        <div><FaVuejs/></div>
      </div>

      <div className="bio-text">
        <h3>my tools</h3>  
        <p>My favorites and not limited toolkit. I enjoy the process of learning and challenging the status quos.</p>

      </div>
    </section>
    <SocialMedia />
  </article>
</Layout>
)}
export default AboutPage


/**GRAPHQL QUERY */
export const  query= graphql`
{
  poster:file(relativePath: {eq: "avatar.png"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  } 
} 

`