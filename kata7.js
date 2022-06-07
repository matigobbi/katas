function direction(facing, turn){
  const directionToDegree = {
    "N": 0,
    "NE": 45,
    "E": 90,
    "SE": 135,
    "S": 180,
    "SW": 225,
    "W": 270,
    "NW": 315
  }
  const degreeToDirection = {
    0: "N",
    45: "NE",
    90: "E",
    135: "SE",
    180: "S",
    225: "SW",
    270: "W",
    315: "NW"
  }
  const subRes = (directionToDegree[facing] + turn) % 360 >= 0 
    ? (directionToDegree[facing] + turn) % 360 
    : (directionToDegree[facing] + turn + 1080) % 360 
  console.log(subRes)
  return degreeToDirection[subRes]
}