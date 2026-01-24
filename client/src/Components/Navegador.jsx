import { Link } from "react-router-dom"
import "./Navegador.css"

function Navbar() {
  const handleLogout = () => {
    console.log('Cerrar sesión')
  }

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 className="logo">LOL API</h2>
        <div className="links">
          <Link to="/">Campeones</Link>
          <Link to="/favorites">Favoritos</Link>
          <Link to="/profile">Perfil</Link>
        </div>
      </div>
      <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  )
}

export default Navbar
