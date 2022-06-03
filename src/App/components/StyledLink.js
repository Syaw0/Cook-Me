import React from "react";
import {Link} from "react-router-dom"
function StyledLink(props) {
  return(
    <Link to={props.to} className={props.type} id={props.id} >{props.inner}</Link>
  )
  
}

export default StyledLink;
