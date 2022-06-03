import React from "react";
import StyledNavLink from "./StyledNavLink";
import useStore from "../store/store";
function RecipeLinks() {
  let getData = useStore(state => state.getRecipeCategory)
  return(
      <div id="recipeLinks_con" >
            <StyledNavLink inner="Goat" to="Goat" event={()=>{getData("Goat")}} type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Goat recipes"/>
            <StyledNavLink inner="Dessert" to="Dessert" event={()=>{getData("Dessert")}} type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Dessert recipes"/>
            <StyledNavLink inner="Breakfast" to="Breakfast"  event={()=>{getData("Breakfast")}} type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Breakfast recipes"/>
            <StyledNavLink inner="Vegetarian" to="Vegetarian" event={()=>{getData("Vegetarian")}}  type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Vegetarian recipes"/>
            <StyledNavLink inner="Vegan" to="Vegan" event={()=>{getData("Vegan")}} type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Vegan recipes"/>
            <StyledNavLink inner="Miscellaneous" to="Miscellaneous" event={()=>{getData("Miscellaneous")}} type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Miscellaneous recipes"/>
            <StyledNavLink inner="Starter" to="Starter" event={()=>{getData("Starter")}} type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Starter recipes"/>
            <StyledNavLink inner="Lamb" to="Lamb" event={()=>{getData("Lamb")}} type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Lamb recipes"/>
            <StyledNavLink inner="Side" to="Side" event={()=>{getData("Side")}} type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Side recipes"/>
            <StyledNavLink inner="Chicken" to="Chicken" event={()=>{getData("Chicken")}} type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Chicken recipes"/>
            <StyledNavLink inner="Seafood" to="Seafood" event={()=>{getData("Seafood")}} type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Seafood recipes"/>
            <StyledNavLink inner="Beef" to="Beef" event={()=>{getData("Beef")}} type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Beef recipes"/>
            <StyledNavLink inner="Pasta" to="Pasta" event={()=>{getData("Pasta")}} type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Pasta recipes"/>
            <StyledNavLink inner="Pork" to="Pork" event={()=>{getData("Pork")}} type={"outline recipesLinkBtn"} typeActive="recipeLinkActive" typeDeActive="recipeLinkDeActive" title="Pork recipes"/>
        </div>
      
  )
  
}

export default RecipeLinks;
