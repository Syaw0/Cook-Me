import React from "react";

import Nav from "../components/Nav";
import Footer from "../components/footer";
import Banner from "../components/Banner";
import RecipeLinks from "../components/RecipeLinks";
import NavBar_small from "../components/Navbar_small";

import { Outlet } from "react-router-dom";

function Home() {
  return(
      <div id="home_con" >
        <Nav/> 
        <Banner inner="RECIPES"/>
        <RecipeLinks/>
        <div id="recipeCard_con">
        <Outlet/>
        </div>
        <NavBar_small/>
        <Footer/>
        </div>
      
  )
  
}

export default Home;
