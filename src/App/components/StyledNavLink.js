import React from "react";
import {NavLink , useLocation} from "react-router-dom"
function StyledNavLink(props) {

  return(
    <NavLink to={props.to} className={({isActive})=>{return isActive?`${props.typeActive} "  " ${props.type}`:`${props.typeDeActive} " " ${props.type}`}} onClick={props.event!== undefined ? ()=>{props.event()}: ''}  title={props.title} >{props.inner}</NavLink>
  )
  
}

export default StyledNavLink;
