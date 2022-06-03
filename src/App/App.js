import React from "react";
import { Route , Routes ,Outlet} from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import RecipeDetail from "./pages/RecipeDetail"
import About from "./pages/About"
import ApiRef from "./pages/ApiRef"
import Faq from "./pages/Faq"
import RecipeCon from "./components/RecipeCon"
import PreviewCon from "./components/PreviewCon"
import NotFound from "./pages/NotFound"
window.addEventListener("resize", () => {
  document.getElementById("root").width = window.innerWidth;
});



function App() {
  return	<>
  	<Routes>
    <Route path="/" element={<Outlet/>} >
    <Route index element={<LandingPage/>} />
    <Route  path="home" element={<Home/>}>
    <Route index element={<PreviewCon/>}/>
    <Route path=":recipe" element={<RecipeCon/>}/>
    </Route> 
    <Route path="/home/:recipe/:detail" element={<RecipeDetail/>}/>
    <Route path="about" element={<About/>}/> 
    <Route path="apiRef" element={<ApiRef/>}/> 
    <Route path="faq" element={<Faq/>}/> 
    </Route>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </>
  
}

export default App;
