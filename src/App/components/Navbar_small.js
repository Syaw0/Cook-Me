import React from "react";
import Button from "../components/Button"
import Ico_X from "../asesst/icons/Icon_X";
function NavBar_small() {
  return(
      <div id="navbar_small_con" >
                <span id="navbar_smal_Xicon"><Ico_X/></span>
                <Button inner="HOME" type="text navbarBtn nav"/>
                <Button inner="ABOUT" type="text navbarBtn"/>
                <Button inner="API REF" type="text navbarBtn"/>
                <Button inner="FAQ" type="text navbarBtn"/>
        </div>
      
  )
  
}

export default NavBar_small;
