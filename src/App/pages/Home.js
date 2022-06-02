import React from "react";
import Button from "../components/Button"
import Nav from "../components/Nav";
import Footer from "../components/footer";
import Banner from "../components/Banner";
import RecipeLinks from "../components/RecipeLinks";
import NavBar_small from "../components/Navbar_small";
import RecipeCard from "../components/recipeCard";

function Home() {
  return(
      <div id="home_con" >
        <Nav/>
        <Banner inner="RECIPES"/>
        <RecipeLinks/>
        <div id="recipeCard_con">
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>


        </div>
        <Footer/>
        </div>
      
  )
  
}

export default Home;
