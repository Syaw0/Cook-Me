import React from "react";
import bannerImg from "../asesst/img/bannerBg.svg"
import useStore from "../store/store";
function Banner(props) {
  let isChange = useStore(state => state.bannerInner)
  let bannerInner = props.inner
  bannerInner == "RECIPES" ?null: bannerInner = isChange
  return(
      <div id="banner_con" style={{backgroundImage:`url("${bannerImg}")` , backgroundPosition:"center" , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , backgroundOrigin:"content-box"}} >
      <div id="banner_cover"></div>
            <p id="banner_Logo">{bannerInner}</p>
        </div>
      
  )
  
}

export default Banner;
