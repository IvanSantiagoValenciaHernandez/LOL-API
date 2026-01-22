import { useEffect, useState } from "react"

function Champions() {
  const [champions, setChampions] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/champions")
      .then(res => res.json())
      .then(data => setChampions(data))
  }, [])

  return (
    <div className="container">
      <h1>Campeones</h1>

      <div className="grid">
        {champions.map(champ => (
          <div key={champ.id} className="card">
            <img src={champ.image} alt={champ.name} />
            <h3>{champ.name}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Champions
