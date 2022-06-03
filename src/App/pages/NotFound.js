import React from "react";
import Nav from "../components/Nav";
import NavBar_small from "../components/Navbar_small";
import Footer from "../components/footer";
function NotFound() {
  return	<>
        <div id="notfound_con">
        <NavBar_small/>
            <Nav/>
            <div id="NotFound">
            <p id="NotFound_header1">{"ERROR 404 "}</p>
            <p id="NotFound_header2">{"I Cant Find What U Want  :( "}</p>
            <p id="NotFound_caption">You can use NavBar to Navigate to the pages!</p>
            </div>

            <Footer/>
        </div>
    </>
  
}

export default NotFound;
