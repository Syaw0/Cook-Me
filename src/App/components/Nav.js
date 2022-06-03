import React from "react";
import Ico_Menu from "../asesst/icons/Icon_Menu"
import StyledNavLink from "./StyledNavLink";
import useStore from "../store/store";



function Nav() {
  let setNavDisplay = useStore(state=>state.setNavDisplay)
  return(
      <div id="nav_con" className="nav_con" >
            <p id="nav_logo">COOK ME</p>
            <div id="navbar_larg">

            <StyledNavLink to="/home" inner="HOME" type="text navbarBtn" typeActive="activeNavLink" typeDeActive="deActiveNavLink"/>
            <StyledNavLink to="/about" inner="ABOUT" type="text navbarBtn" typeActive="activeNavLink" typeDeActive="deActiveNavLink"/>
            <StyledNavLink to="/apiRef" inner="API REF" type="text navbarBtn" typeActive="activeNavLink" typeDeActive="deActiveNavLink"/>
            <StyledNavLink to="/faq" inner="FAQ" type="text navbarBtn" typeActive="activeNavLink" typeDeActive="deActiveNavLink"/>

            {/* <NavLink to={"/app"} >HOME</NavLink> */}

                {/* <Button inner="HOME" type="text navbarBtn"/> */}
                {/* <Button inner="ABOUT" type="text navbarBtn"/>
                <Button inner="API REF" type="text navbarBtn"/>
                <Button inner="FAQ" type="text navbarBtn"/> */}
            </div>
            <div id="navbar_small" onClick={()=>{setNavDisplay(true)}}><Ico_Menu/></div>
        </div>
      
  )
  
}

export default Nav;
