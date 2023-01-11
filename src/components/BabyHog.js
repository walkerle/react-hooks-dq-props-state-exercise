import React from "react";
import normalBaby from "../assets/unadulterated-hoglette.png";
import SunBaby from "../assets/sun-eyes.png";
import BlueBaby from "../assets/blue-eyes.png";
import GlowingBaby from "../assets/glowing-eyes.png";
import { useState } from "react";

// is there a way we could associate eye color string values with images?
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

function BabyHog({ name, hobby, eyeColor }) {

  const [ hogWeight, setHogWeight ] = useState(10)

  const eyeColorMapper = (color) => {
  switch(color) {
    case "blue":
      return BlueBaby;
    case "sun":
      return SunBaby
    case "glowing":
      return GlowingBaby;
    default: 
      return normalBaby;
  }
}

  function handleChangeWeight(e) {
    // how can we reuse this for both buttons?
    // perhaps something with e.target.name === "+"
    if(e.target.name === "+") {
      setHogWeight(prevValue => prevValue + 2);
    } else if(e.target.name === "-") {
      if(hogWeight !== 0){
        setHogWeight(prevValue => prevValue - 2);
      }
    }
  }
  return (
    <li className="hogbabies">
      <h1>{name}</h1>
      <h3>Weight:{hogWeight}</h3>
      <h3>Hobby:{hobby}</h3>
      <h4>Eye Color:{eyeColor}</h4>

      <button onClick={handleChangeWeight} name="+">Increase Weight</button>
      <button onClick={handleChangeWeight} name="-">Decrease Weight</button>

      <div className="hb-wrap">
        <img
          src={eyeColorMapper(eyeColor)}
          style={{ height: "200px" }}
          alt="MasterBlasterJrJr"
        />
      </div>
    </li>
  );
}

export default BabyHog;
