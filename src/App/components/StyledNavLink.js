import React from "react";
import {NavLink , useLocation} from "react-router-dom"
function StyledNavLink(props) {

  return(
    <NavLink to={props.to} className={({isActive})=>{return isActive?`${props.typeActive} "  " ${props.type}`:`${props.typeDeActive} " " ${props.type}`}}  title={props.title} onClick={()=>{props.event()}}>{props.inner}</NavLink>
  )
  
}

export default StyledNavLink;
