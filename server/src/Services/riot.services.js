const BASE = "https://ddragon.leagueoflegends.com"

export async function getLatestVersion() {
  const res = await fetch(`${BASE}/api/versions.json`)
  const data = await res.json()
  return data[0] // la primera es la más reciente
}

export async function getChampionsData() {
  const version = await getLatestVersion()
  const res = await fetch(`${BASE}/cdn/${version}/data/en_US/champion.json`)
  const data = await res.json()
  return data.data
}

export async function getChampionById(id) {
  const version = await getLatestVersion()

  const res = await fetch(
    `${BASE}/cdn/${version}/data/en_US/champion/${id}.json`
  )

  if (!res.ok) {
    throw new Error("Champion not found")
  }

  const data = await res.json()
  const champ = data.data[id]

  return {
    id: champ.id,
    name: champ.name,
    title: champ.title,
    lore: champ.lore,
    tags: champ.tags,
    image: `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ.id}_0.jpg`,
    spells: champ.spells.map(spell => ({
      id: spell.id,
      name: spell.name,
      description: spell.description
    }))
  }
}
