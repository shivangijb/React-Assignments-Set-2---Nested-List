import React from "react";

export default function Town({name, index}){
  return(
    <li>
      <div id={"town" + (index+1)}>{name}</div>
    </li>
  );
}