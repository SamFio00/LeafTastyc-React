import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Results from "./pages/Results"
import ExploreRecipes from "./pages/ExploreRecipes"
import RecipeDetails from "./pages/RecipeDetails"
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/results" element={<Results />} />
      <Route path="/explore-recipes" element={<ExploreRecipes />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />
    </Routes>
    </>
  )
}

export default App
