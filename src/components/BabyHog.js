import React from "react";
// import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";
import { useState } from "react";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

const eyeColorMapper = (color) => {
  switch(color) {
    case "blue":
      return BlueBaby;
    case "sun":
      return SunBaby
    case "glowing":
      return GlowingBaby;
  }
}

function BabyHog({ name, hobby, eyeColor }) {
  // function handleChangeWeight(e) {
  //   // how can we reuse this for both buttons?
  //   // perhaps something with e.target.name === "+"

  //   const [ hogWeight, setHogWeight ] = useState(10)
    
  //   if(e.target.name === "+") {
      
  //   } else if(e.target.name === "-") {

  //   }
  // }
  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight:</h3>
      <h3>Hobby:{hobby}</h3>
      <h4>Eye Color:{eyeColor}</h4>

      <button /*onClick={handleChangeWeight}*/ name="+">Increase Weight</button>
      <button /*onClick={handleChangeWeight}*/ name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper(eyeColor)}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
  
  
  // const babyHogGroup = offspring.map(baby => {
    
  // })
  // return babyHogGroup;
  
}

export default BabyHog;
