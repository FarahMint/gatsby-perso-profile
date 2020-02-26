import React, {useState} from "react";
 
import Card from "./Card";
import {FaAngleRight, FaAngleLeft} from "react-icons/fa"

import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function Slider({portfolio}) {
 
  const portfolioListing = portfolio.map(project => project.node);


  const [x, setX] = useState(0);

  const goLeft =  () => {
    x === 0 ? setX(-100 * (portfolioListing.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (portfolioListing.length - 1) ? setX(0) : setX(x - 100);
     
  };
 
  return (
      <div className="wrapper"> 
      <div>
        <button className="goLeft" 
        onClick={() => goLeft()}
        onMouseOver={()=> goLeft()}>
            <FaAngleLeft/>
        </button>
        <AniLink
            paintDrip
            to="/work" hex="#FF3E55">
            View all work
        </AniLink>
        <button className="goRight" 
        onClick={() => goRight()}>
        <FaAngleRight/>
        </button>
      </div>


      <div className="cards-slider">
         {portfolioListing.map((project) => {
          return (
            <div
            key={project.id}
              className="slide"
              style={{ transform: `translateX(${x}%)` }}
            >
              <Card 
             project={project} 
              />
            </div>
           );  
         })}  

      </div>
    </div>
  );
}
