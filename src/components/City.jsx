import React from "react";
import Town from "./Town";

export default function City({index, name, towns }){
  const [click, setClick] = React.useState(false);
  return(
    <>
    <li>
      <div id={"city" + (index+1)} onClick = {() => setClick(!click)}>{name}</div>
    </li>
    {(click) ? 
    (<ul>
      {towns.map((town) => 
        <Town name={town.name} index={towns.indexOf(town)}/>)}
    </ul>)
    :null}
    </>
  )
}