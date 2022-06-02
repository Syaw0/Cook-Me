import React from "react";
import bannerImg from "../asesst/img/bannerBg.jpg"

function Banner(props) {
  return(
      <div id="banner_con" style={{backgroundImage:`url("${bannerImg}")` , backgroundPosition:"center" , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , backgroundOrigin:"content-box"}} >
      <div id="banner_cover"></div>
            <p id="banner_Logo">{props.inner}</p>
        </div>
      
  )
  
}

export default Banner;
