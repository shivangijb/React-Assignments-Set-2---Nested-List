import React from "react";
import City from "./City";

export default function State({index, name , cities}){
  const [stateClick , setStateClick] = React.useState(false);
  return(
    <>
    <li>
      <div id={"state" + (index+1)} onClick={() => setStateClick(!stateClick)}>{name}</div>
    </li>
    {(stateClick) ? 
      (<ul>
        {cities.map((city) => 
          <City name={city.name} towns={city.towns} index={cities.indexOf(city)}/>)}
      </ul>)
      :null}
    </>

  )
}