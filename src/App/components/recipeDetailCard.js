import React , {useEffect} from "react";
import Button from "./Button"
import useStore from "../store/store";
import {useLocation , useNavigate} from "react-router-dom"

function RecipeDetailCard() {
  let pageOffest = useStore(state=>state.pageOffest)
  
  let path =  useLocation().pathname
 
  let navigate = useNavigate()
  let getRandom = useStore(state=>state.getRandomRecipe)
  let setBanner = useStore(state=>state.setBanner)
  
  let idMeal = useLocation().pathname.split("/")[3]
  let recipeData = useStore(state => state.recipes[idMeal])

  useEffect(()=>{
    
  getRandom()
  setBanner(recipeData["strMeal"])
  },[idMeal])


  let materialLength = 0 
  let materialList = []
  let recipeSteps = []
  let tags 
  



  recipeSteps = recipeData["strInstructions"].split("\r\n")
  

  for(let i = 1 ; i !=  22 ; i++){
    if(recipeData[`strIngredient${i}`] != ""){
      let metaData = {}
      metaData[recipeData[`strIngredient${i}`]] = recipeData[`strMeasure${i}`]
      materialList.push(metaData)
      materialLength++
    }else{break}
  }


  if(recipeData["strTags"]!= null){
    tags = recipeData["strTags"].split(",")
  }

  
  return	<>
  	<div className="recipeDetailCard_con">

      <div className="recipeDetailCard_top">

      <div className="recipeDetailCard_top_Img" style={{backgroundImage:`url("${recipeData["strMealThumb"]}")` , backgroundPosition:"center" , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , backgroundOrigin:"content-box"}}>

      </div>

      <div className="recipeDetailCard_top_title">
        <div className="recipeDetailCard_top_title_top">
        <p className="recipeDetailCard_top_title_mainTitle">{recipeData["strMeal"]}</p>
      <p className="recipeDetailCard_top_title_subTitle">{recipeData["strArea"]} - {recipeData["strCategory"]}</p>
      <p className="recipeDetailCard_top_title_caption">    For this delicious food <br></br>we need <span style={{fontFamily:"Fraunces-extraBold" , textDecoration:"underline"}}>{materialLength}</span> raw materials</p>
        </div>
      <div className="recipeDetailCard_top_title_tags_con">
      {tags != undefined &&
              tags.map((v ,i)=>{
                return(
                  <p className="recipeDetailCard_top_title_tags" key={i} >{v}</p>
                )
              })
            }
            
            {tags == undefined &&
              <p className="Card_information_tags">No Tag Available</p>
            }


      </div>
      </div>
      </div>

      <div className="recipeDetailCard_bottom">
      <div className="recipeDetailCard_bottom_material">
          <p className="recipeDetailCard_bottom_material_title">What We Need:</p>
          <div className="recipeDetailCard_bottom_material_con">

            {materialList.map((v,i)=>{
              return(
                <div className="recipeDetailCard_bottom_material_con_items" key={i}>
              <p className="recipeDetailCard_bottom_material_con_items_mat">{Object.keys(v)[0]}</p>
              <p className="recipeDetailCard_bottom_material_con_items_value">{Object.values(v)[0]}</p>
              </div>
              )
            })}
          </div>
      </div>
      <div className="recipeDetailCard_bottom_recipe">
      <p className="recipeDetailCard_bottom_recipe_title">How Cook:</p>
      <div className="recipeDetailCard_bottom_recipe_con">
          <ul>
            {recipeSteps.map((v,i)=>{
              if(v!=""){
                if(isFinite(v[0]) && v[0] != " "){
                  
                  let num = v[3] == " " ? 3:2
                 return  <li key={i}>{v.slice(num)}</li>
                }else{
                  return(
                  <li key={i}>{v}</li>
                )
                }
                
              }
            })}
          </ul>
      </div>
        <div className="recipeDetailCard_bottom_recipe_btns">
      <Button inner="GO BACK" type="text detailRecipeBtn" id="detailRecipeBtn_goback"  event={()=>{window.history.back() ; window.scrollTo(0,pageOffest)}}/>

      {recipeData["strSource"] != "" &&   <Button inner="FOLLOW ON SOURCE" type="primary detailRecipeBtn" id="detailRecipeBtn_follow" event={()=>{if(recipeData["strSource"] != ""){window.location.href=recipeData["strSource"]}}} />}
        </div>
      </div>

      </div>
      </div>
    </>
  
}

export default RecipeDetailCard;
