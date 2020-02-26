import React, {useState} from "react";
 
import Card from "./Card";
import {FaAngleRight, FaAngleLeft, FaAngleDown} from "react-icons/fa"

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
        <button type="button" className="goLeft" 
        onClick={() => goLeft()}
        onMouseOver={()=> goLeft()}>
            <FaAngleLeft/>
        </button>
        {/* <AniLink
            paintDrip
            to="/work" hex="#FF3E55">
            See my projects
        </AniLink> */}
        <button type="button" className="goRight" 
        onClick={() => goRight()}>
        <FaAngleRight/>
        </button>
      </div>

      <div className="icon-down">
        <button type="button">
        <FaAngleDown onClick={()=>console.log("get down")}/>
        </button>
      </div>
      <AniLink
            paintDrip
            to="/work" hex="#FF3E55">
            See my projects
        </AniLink>

      <div id="sliders" className="cards-slider">
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
