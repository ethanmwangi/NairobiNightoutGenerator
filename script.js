const places = [
  { name: "Amazonia", area: "Westlands", vibe: "turn up", budget: "mid" },
  { name: "Alchemist", area: "Westlands", vibe: "chill", budget: "mid" },
  { name: "NSK", area: "Westlands", vibe: "turn up", budget: "mid" },
  { name: "Great Cafe", area: "Lavington", vibe: "chill", budget: "low" },
  { name: "Cafe Kaya", area: "Lavington", vibe: "chill", budget: "low" },
  { name: "Winebox", area: "Lavington", vibe: "date night", budget: "mid" },
  { name: "ElevenEleven", area: "Westlands", vibe: "turn up", budget: "high" },
]

const areaValue = document.getElementById("area").value
const vibeValue = document.getElementById("vibe").value
const budgetValue = document.getElementById("budget").value

function generateNightOut() {
  const areaValue = document.getElementById("area").value
  const vibeValue = document.getElementById("vibe").value
  const budgetValue = document.getElementById("budget").value
 const results = places.filter(function(place){
    return place.area === areaValue && place.vibe === vibeValue && place.budget === budgetValue
  })
  console.log(results)
 

const generateBtn = document.getElementById("generateBtn")
generateBtn.addEventListener("click", generateNightOut)