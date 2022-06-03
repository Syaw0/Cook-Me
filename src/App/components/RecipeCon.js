import React,{useEffect} from "react";
import { Route , Routes ,Outlet, Link , useLocation} from "react-router-dom";
import RecipeCard from "./recipeCard"
import Loading from "./Loading"
import useStore from "../store/store";


function RecipeCon() {
  let path = useLocation().pathname.split("/")[2]
  let recipeSummary = useStore(state=>state.recipesSummary)
  let recipes = useStore(state=>state.recipes)

    let isOK = recipeSummary[path]
  return	<>
           { isOK == undefined && <Loading/> }
           { isOK !== undefined && 
            recipeSummary[path].map((v,i)=>{
              
              let recipeData  =recipes[v.idMeal]
              return(
                <RecipeCard key={i} id={i} title={v.strMeal} catgory={recipeData.strCategory} img={v.strMealThumb} reagan={recipeData["strArea"]} tags={recipeData["strTags"]} idMeal={v.idMeal} currentY={window.pageYOffset} recipeLink={true}/>
              )
            })
           }
    </>
  
}

export default RecipeCon;


