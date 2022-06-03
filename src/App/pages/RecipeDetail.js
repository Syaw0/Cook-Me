import React,{useEffect} from "react";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import Banner from "../components/Banner";
import RecipeDetailCard from "../components/recipeDetailCard"
import RecipeCard from "../components/recipeCard"
import NavBar_small from "../components/Navbar_small";
import useStore from "../store/store";

function RecipeDetail() {


  let randomList = useStore(state=>state.random3)
  
  return(
      <div id="recipeDetail_con" >
                  <NavBar_small/>
        <Nav/>
        <Banner inner="Chocolate Raspberry Brownies"/>
        <div id="recipeDetailCardCon">
        <RecipeDetailCard/>
        </div>
        <div id="recipeDetail_random">
        <p id="recipeDetail_random_title">RANDOM RECIPES</p>
        <div id="recipeDetail_random_card_con">
        {randomList.length != 0 && randomList.map((v,i)=>{

          return <RecipeCard key={i} id={i} title={v.strMeal} catgory={v.strCategory} img={v.strMealThumb} reagan={v["strArea"]} tags={v["strTags"]} idMeal={v.idMeal} />
        })}
        </div>
        </div>
        
        <Footer/>
        </div>
      
  )
  
}

export default RecipeDetail;
