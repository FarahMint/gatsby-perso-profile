import React from 'react';
import PropTypes from 'prop-types';

import Img from 'gatsby-image';
import {Link} from "gatsby";

 
const Card = ({project}) => {
    return (
        <div className="project">
           <Link to={`/work/${project.title}`}>
        <div  className="img-container" >
          <Img 
          fluid={project.thumbnailImage.childImageSharp.fluid} /> 
          
          <div className="overlay__stack"></div>
        </div>

        <div className="descr">
          <h4 className="project-title">{project.title}</h4>
        </div>  
        </Link> 
        </div>
    )
}

Card.propTypes = {
  project: PropTypes.object.isRequired
}

export default Card;