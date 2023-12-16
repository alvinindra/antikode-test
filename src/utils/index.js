function randomNumber(min, max) {
  let random = Math.random() * max
  return random - (random % 20)
}

export const generateRandomPosition = (width, height) => {
  return {
    x: randomNumber(0, width),
    y: randomNumber(0, height),
  }
}
