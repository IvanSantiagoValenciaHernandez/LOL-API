import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import "./App.css"

/* -------- PÁGINA CAMPEONES (tu código original) -------- */
function Champions() {
  const [champions, setChampions] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("http://localhost:3000/api/champions")
      .then(res => res.json())
      .then(data => {
        setChampions(data)
        setLoading(false)
      })
      .catch(error => {
        console.error(error)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <h2>Cargando campeones...</h2>
  }

  return (
    <div className="container">
      <h1>League of Legends Champions</h1>

      <div className="grid">
        {champions.map(champ => (
          <div key={champ.id} className="card">
            <img src={champ.image} alt={champ.name} />
            <h3>{champ.name}</h3>
            <p>{champ.title}</p>

            <div className="tags">
              {champ.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* -------- PÁGINAS SIMPLES -------- */
function Favorites() {
  return (
    <div className="container">
      <h1>Favoritos ⭐</h1>
      <p>Aquí irán los campeones guardados</p>
    </div>
  )
}

function Profile() {
  return (
    <div className="container">
      <h1>Perfil 👤</h1>
      <p>Login y datos del usuario</p>
    </div>
  )
}

/* -------- NAVBAR -------- */
function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">LOL API</h2>

      <div className="links">
        <Link to="/">Campeones</Link>
        <Link to="/favorites">Favoritos</Link>
        <Link to="/profile">Perfil</Link>
      </div>
    </nav>
  )
}

/* -------- APP -------- */
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Champions />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
