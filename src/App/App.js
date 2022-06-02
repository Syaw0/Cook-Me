import React from "react";
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import RecipeDetail from "./pages/RecipeDetail"
import About from "./pages/About"
import ApiRef from "./pages/ApiRef"
import Faq from "./pages/Faq"
window.addEventListener("resize", () => {
  document.getElementById("root").width = window.innerWidth;
});



function App() {
  return	<>
  	<Faq/>
    </>
  
}

export default App;
