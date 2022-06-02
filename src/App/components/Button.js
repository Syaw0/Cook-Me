import React from "react";


function Button(props) {
  return	<>
  	<button className={props.type} onClick={()=>{props.event()}} id={props.id} >{props.inner} </button>
    </>
  
}

export default Button;
