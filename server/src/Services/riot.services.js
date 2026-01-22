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
