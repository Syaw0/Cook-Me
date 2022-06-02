import React from "react";
import bgImg from "../asesst/img/bg-landpage.jpg"
import Button from "../components/Button"
console.log(bgImg)
function LandingPage() {
  return(
      <div id="landingPage_con" style={{backgroundImage:`url("${bgImg}")` , backgroundPosition:"center" , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , backgroundOrigin:"content-box"}}>
        <div id="landingPage_cover"></div>
        <div id="landingPage_card">
            <div id="landingPage_card_top">
            <p id="landingPage_card_header">COOK <span className="green_middle_word" style={{color:"var(--tertiary-con)"}}>ME</span></p>
            <p id="landingPage_card_subHeader">A small source of <br></br> <span className="green_middle_word underline_middle_word" style={{color:"var(--tertiary-con)" , textDecoration:"underline"}}>recipes</span></p>
            <p id="landingPage_card_caption">Fresh flavorful and (mostly) <br></br>  healthy recipes <br></br>  Quick and Easy Recipes <br></br> Healthy meal ideas</p>
            <Button inner={"GET START"} type={"primary "} id={"landingPage_card_button"} event={{}}/>
            </div>
            <div id="landingPage_card_footer">
            <Button inner={"API REF"} type={"text landingPage_card_footer_btn"} event={{}}/> 
            <Button inner={"CREATOR"} type={"text landingPage_card_footer_btn"} event={{}}/> 
            <Button inner={"FAQ"} type={"text landingPage_card_footer_btn"} event={{}}/> 
            </div>
        </div>
      </div>
  )
  
}

export default LandingPage;
