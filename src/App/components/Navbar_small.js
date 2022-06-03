import React from "react";
import Ico_X from "../asesst/icons/Icon_X";
import StyledNavLink from "./StyledNavLink";
import useStore from "../store/store";
function NavBar_small() {
  let navDisplay = useStore(state=>state.isNavShow)
  let setNavDisplay = useStore(state=>state.setNavDisplay)
  return(<>
        {navDisplay && 
          <div id="navbar_small_con" >
          <span id="navbar_smal_Xicon" onClick={()=>{setNavDisplay(false)}}><Ico_X/></span>
          <StyledNavLink to="/home" inner="HOME" type="text navbarBtn" typeActive="activeNavLink" typeDeActive="deActiveNavLink"/>
            <StyledNavLink to="/about" inner="ABOUT" type="text navbarBtn" typeActive="activeNavLink" typeDeActive="deActiveNavLink"/>
            <StyledNavLink to="/apiRef" inner="API REF" type="text navbarBtn" typeActive="activeNavLink" typeDeActive="deActiveNavLink"/>
            <StyledNavLink to="/faq" inner="FAQ" type="text navbarBtn" typeActive="activeNavLink" typeDeActive="deActiveNavLink"/>
  </div>}
  </>
      
  )
  
}

export default NavBar_small;
