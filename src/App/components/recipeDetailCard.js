import React from "react";
import Button from "./Button"
let url = "https://www.themealdb.com/images/media/meals/yypvst1511386427.jpg"
function RecipeDetailCard() {
  return	<>
  	<div className="recipeDetailCard_con">

      <div className="recipeDetailCard_top">

      <div className="recipeDetailCard_top_Img" style={{backgroundImage:`url("${url}")` , backgroundPosition:"center" , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , backgroundOrigin:"content-box"}}>

      </div>

      <div className="recipeDetailCard_top_title">
        <div className="recipeDetailCard_top_title_top">
        <p className="recipeDetailCard_top_title_mainTitle">Chocolate Raspberry Brownies</p>
      <p className="recipeDetailCard_top_title_subTitle">American - Dessert</p>
      <p className="recipeDetailCard_top_title_caption">    For this delicious food <br></br>we need <span style={{fontFamily:"Fraunces-extraBold" , textDecoration:"underline"}}>14</span> raw materials</p>
        </div>
      <div className="recipeDetailCard_top_title_tags_con">
      <p className="recipeDetailCard_top_title_tags">Snack</p>
      <p className="recipeDetailCard_top_title_tags">Chocolate</p>
      <p className="recipeDetailCard_top_title_tags">Desert</p>

      </div>
      </div>
      </div>

      <div className="recipeDetailCard_bottom">
      <div className="recipeDetailCard_bottom_material">
          <p className="recipeDetailCard_bottom_material_title">What We Need:</p>
          <div className="recipeDetailCard_bottom_material_con">

          <div className="recipeDetailCard_bottom_material_con_items">
              <p className="recipeDetailCard_bottom_material_con_items_mat">Dark Chocolate</p>
              <p className="recipeDetailCard_bottom_material_con_items_value">200g</p>
              </div>

              <div className="recipeDetailCard_bottom_material_con_items">
              <p className="recipeDetailCard_bottom_material_con_items_mat">Milk Chocolate</p>
              <p className="recipeDetailCard_bottom_material_con_items_value">100g</p>
              </div>
              <div className="recipeDetailCard_bottom_material_con_items">
              <p className="recipeDetailCard_bottom_material_con_items_mat">Salted Butter</p>
              <p className="recipeDetailCard_bottom_material_con_items_value">250g</p>
              </div>
              <div className="recipeDetailCard_bottom_material_con_items">
              <p className="recipeDetailCard_bottom_material_con_items_mat">Light Brown Soft Sugar</p>
              <p className="recipeDetailCard_bottom_material_con_items_value">400g</p>
              </div>
              <div className="recipeDetailCard_bottom_material_con_items">
              <p className="recipeDetailCard_bottom_material_con_items_mat">Eggs</p>
              <p className="recipeDetailCard_bottom_material_con_items_value">4 large</p>
              </div>
              <div className="recipeDetailCard_bottom_material_con_items">
              <p className="recipeDetailCard_bottom_material_con_items_mat">Plain Flour</p>
              <p className="recipeDetailCard_bottom_material_con_items_value">140g</p>
              </div>
              <div className="recipeDetailCard_bottom_material_con_items">
              <p className="recipeDetailCard_bottom_material_con_items_mat">Cocoa</p>
              <p className="recipeDetailCard_bottom_material_con_items_value">50g</p>
              </div>
              <div className="recipeDetailCard_bottom_material_con_items">
              <p className="recipeDetailCard_bottom_material_con_items_mat">Raspberries</p>
              <p className="recipeDetailCard_bottom_material_con_items_value">200g</p>
              </div>

          </div>
      </div>
      <div className="recipeDetailCard_bottom_recipe">
      <p className="recipeDetailCard_bottom_recipe_title">How Cook:</p>
      <div className="recipeDetailCard_bottom_recipe_con">
          <ul>
          <li>Heat oven to 180C/160C fan/gas 4. Line a 20 x 30cm baking tray tin with baking parchment</li>
          <li>Put the chocolate, butter and sugar in a pan and gently melt, stirring occasionally with a wooden spoon</li>
          <li>Remove from the heat</li>
          <li>Stir the eggs, one by one, into the melted chocolate mixture</li>
          <li>Sieve over the flour and cocoa, and stir in</li>
          <li>Stir in half the raspberries, scrape into the tray, then scatter over the remaining raspberries</li>
          <li>Bake on the middle shelf for 30 mins or, if you prefer a firmer texture, for 5 mins more</li>
          <li>Cool before slicing into squares. Store in an airtight container for up to 3 days</li>
          <li>ENJOY :D</li>
          </ul>
      </div>
        <div className="recipeDetailCard_bottom_recipe_btns">
      <Button inner="GO BACK" type="text detailRecipeBtn" id="detailRecipeBtn_goback" />
        <Button inner="FOLLOW ON SOURCE" type="primary detailRecipeBtn" id="detailRecipeBtn_follow" />
        </div>
      </div>

      </div>
      </div>
    </>
  
}

export default RecipeDetailCard;
