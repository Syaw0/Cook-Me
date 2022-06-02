import React from "react";
import Button from "../components/Button"

let url  = "https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg"
function RecipeCard() {
  return(
      <div className="Card_con" >
        <div className="Card_Imgcon" style={{backgroundImage:`url("${url}")` , backgroundPosition:"center" , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , backgroundOrigin:"content-box"}}></div>
        <div className="Card_information">

        <div  className="Card_information_top">

        <p className="Card_information_title">Baked salmon with fennel & tomatoes</p>
        <p className="Card_information_subTitle">British</p>

        </div>

        <div  className="Card_information_bottom">

        <p className="Card_information_tags">LowCarbs</p>
        <p className="Card_information_tags">Baking</p>
        <p className="Card_information_tags">HighFat</p>
        <p className="Card_information_tags">Keto</p>
        <p className="Card_information_tags">Paleo</p>

        </div>
        </div>
        </div>
      
  )
  
}

export default RecipeCard;
