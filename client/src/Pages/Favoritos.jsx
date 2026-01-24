import { useEffect, useState } from "react"

function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem("favorites")) || [])
  }, [])

  if (favorites.length === 0) {
    return <h2 style={{ textAlign: "center" }}>No tienes favoritos ⭐</h2>
  }

  return (
    <div className="container">
      <h1>Mis Favoritos ⭐</h1>

      <div className="grid">
        {favorites.map(champ => (
          <div key={champ.id} className="card">
            <img src={champ.image} alt={champ.name} />
            <h3>{champ.name}</h3>
            <p>{champ.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
