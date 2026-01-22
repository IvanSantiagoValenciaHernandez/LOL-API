import { Link } from "react-router-dom"
import "./Navegador.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">LoL API</h2>

      <ul className="nav-links">
        <li><Link to="/">Campeones</Link></li>
        <li><Link to="/favorites">Favoritos</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
