import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Results from "./pages/Results/Results"
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="app">
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App