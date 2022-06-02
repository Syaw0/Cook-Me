import React from "react";
import Button from "../components/Button"
import Ico_Menu from "../asesst/icons/Icon_Menu"
function Nav() {
  return(
      <div id="nav_con" >
            <p id="nav_logo">COOK ME</p>
            <div id="navbar_larg">
                <Button inner="HOME" type="text navbarBtn"/>
                <Button inner="ABOUT" type="text navbarBtn"/>
                <Button inner="API REF" type="text navbarBtn"/>
                <Button inner="FAQ" type="text navbarBtn"/>
            </div>
            <div id="navbar_small"><Ico_Menu/></div>
        </div>
      
  )
  
}

export default Nav;
