import React from "react";
import Button from "../components/Button"
import Nav from "../components/Nav";
import Footer from "../components/footer";
import Banner from "../components/Banner";
import RecipeDetailCard from "../components/recipeDetailCard"
import RecipeCard from "../components/recipeCard"

function RecipeDetail() {
  return(
      <div id="recipeDetail_con" >
        <Nav/>
        <Banner inner="Chocolate Raspberry Brownies"/>
        <div id="recipeDetailCardCon">
        <RecipeDetailCard/>
        </div>
        <div id="recipeDetail_random">
        <p id="recipeDetail_random_title">RANDOM RECIPES</p>
        <div id="recipeDetail_random_card_con">
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        </div>
        </div>
        <Footer/>
        </div>
      
  )
  
}

export default RecipeDetail;
