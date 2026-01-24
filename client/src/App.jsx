import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navegador"
import Champions from "./Pages/Campeones"
import Favorites from "./Pages/Favoritos"
import Profile from "./Pages/Perfil"
import ChampionDetail from "./Pages/CampeonesDetalles"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Champions />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/champion/:id" element={<ChampionDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
