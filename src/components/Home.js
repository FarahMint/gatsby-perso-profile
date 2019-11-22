import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Home() {
    return (
        <article className="about--container single--container">
        <section className="header">
          <h1>Hello<span className="color">,</span> <br/>I’m Farah<br/></h1>  
      
          <p className="small-height">
              Front-End Developer &amp; UX Designer</p>
            <div className="cta">
              <AniLink
               paintDrip
                to="/about" hex="#FF3E55">
               discover
               <span> > > </span>
              
              </AniLink>
            </div>
        </section>
        </article>
    )
}
