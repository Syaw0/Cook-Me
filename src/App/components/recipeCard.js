import React from "react";
import Button from "../components/Button"
import {useLocation , useNavigate} from "react-router-dom"
import useStore from "../store/store";

function RecipeCard(props) {
  let setPageOffest = useStore(state=>state.setPageOffest)
  
  let nextUrl =  `/home/${props.catgory}/${props.idMeal}`
  let navigate = useNavigate()
  let tags 
  if(props.tags != null){
    tags = props.tags.split(",")
  }

  return(
      <div className="Card_con" onClick={(e)=>{navigate(nextUrl) ; window.scrollTo(0 , 0) ; setPageOffest(e.pageY)}}>
        <div className="Card_Imgcon" style={{backgroundImage:`url("${props.img}")` , backgroundPosition:"center" , backgroundRepeat:"no-repeat" , backgroundSize:"cover" , backgroundOrigin:"content-box"}}></div>
        <div className="Card_information">

        <div  className="Card_information_top">

        <p className="Card_information_title">{props.title}</p>
        <p className="Card_information_subTitle">{props.reagan}</p>

        </div>

        <div  className="Card_information_bottom">

            {tags != undefined &&
              tags.map((v , i)=>{
                return(
                  <p className="Card_information_tags" key={i} >{v}</p>
                )
              })
            }
            
            {tags == undefined &&
              <p className="Card_information_tags">No Tag Available</p>
            }


        </div>
        </div>
        </div>
      
  )
  
}

export default RecipeCard;
