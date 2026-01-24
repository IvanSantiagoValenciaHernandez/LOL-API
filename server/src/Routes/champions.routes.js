import express from "express"
import { getChampionsData, getChampionById } from "../Services/riot.services.js"

const router = express.Router()

router.get("/", async (req, res) => {
  try {
    const champions = await getChampionsData()

    // convertir el objeto en arreglo más fácil de usar
    const list = Object.values(champions).map(champ => ({
      id: champ.id,
      name: champ.name,
      title: champ.title,
      tags: champ.tags,
      image: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`
    }))

    res.json(list)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to fetch champions" })
  }
})

// 🔹 DETALLE DE UN CAMPEÓN
router.get("/:id", async (req, res) => {
  try {
    const champion = await getChampionById(req.params.id)
    res.json(champion)
  } catch (error) {
    console.error(error)
    res.status(404).json({ error: "Champion not found" })
  }
})

export default router
