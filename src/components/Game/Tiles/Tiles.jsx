import { useEffect, useMemo, useState } from 'react'
import clsx from 'clsx'
import styles from './Tiles.module.scss'

const numRows = 6
const numCols = 6
const numTiles = numRows * numCols
const emptyTilesPosition = [8, 9, 10, 11, 14, 23, 26, 29]

const generateRandomYellowPosition = (excludedPositions) => {
  let yellowTilePosition
  do {
    yellowTilePosition = Math.floor(Math.random() * numTiles)
  } while (excludedPositions.includes(yellowTilePosition))
  return yellowTilePosition
}

const Tiles = ({ score, setScore }) => {
  const [tiles, setTiles] = useState([])
  const [blueTilePosition, setBlueTilePosition] = useState({ x: 2, y: 2 })

  useEffect(() => {
    const newTiles = Array.from({ length: numRows }, (_, rowIndex) =>
      Array.from({ length: numCols }, (_, colIndex) => ({
        id: rowIndex * numCols + colIndex + 1,
        type: 'normal',
      }))
    )

    const yellowTilePosition = generateRandomYellowPosition(emptyTilesPosition)
    const yellowTileX = yellowTilePosition % numCols
    const yellowTileY = Math.floor(yellowTilePosition / numCols)
    newTiles[yellowTileY][yellowTileX].type = 'yellow'

    setTiles(newTiles)
  }, [])

  const moveBlueTile = useMemo(
    () => (direction) => {
      const newX = blueTilePosition.x + direction.x
      const newY = blueTilePosition.y + direction.y

      if (newX >= 0 && newX < numCols && newY >= 0 && newY < numRows) {
        setBlueTilePosition({ x: newX, y: newY })
      }

      if (
        newY < tiles?.length &&
        newX < tiles[newY]?.length &&
        tiles[newY][newX] &&
        tiles[newY][newX].type === 'yellow'
      ) {
        setScore((prevScore) => prevScore + 100)

        // Turn yellow tile into blue
        const updatedTiles = [...tiles]
        updatedTiles[newY][newX].type = 'blue'

        // Spawn a new yellow tile at a random position
        const newYellowPosition =
          generateRandomYellowPosition(emptyTilesPosition)
        const newY2 = Math.floor(newYellowPosition / numCols)
        const newX2 = newYellowPosition % numCols
        updatedTiles[newY2][newX2].type = 'yellow'

        setTiles(updatedTiles)
      }
    },
    [blueTilePosition.x, blueTilePosition.y, setScore, tiles]
  )

  useEffect(() => {
    // Keyboard event listener
    const handleKeyDown = (event) => {
      const { keyCode } = event
      switch (keyCode) {
        case 37: // Left arrow
          moveBlueTile({ x: -1, y: 0 })
          break
        case 38: // Up arrow
          moveBlueTile({ x: 0, y: -1 })
          break
        case 39: // Right arrow
          moveBlueTile({ x: 1, y: 0 })
          break
        case 40: // Down arrow
          moveBlueTile({ x: 0, y: 1 })
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [moveBlueTile])

  return (
    <div className="container-fluid mb-3">
      <div className="row">
        {tiles.map((row, rowIndex) =>
          row.map((tile) => (
            <div
              key={rowIndex + tile.id}
              className={clsx(
                styles.tile,
                tile.type === 'yellow' && styles.tileYellow,
                tile.type === 'empty' && styles.tileEmpty,
                tile.id ===
                  blueTilePosition.y * numCols + blueTilePosition.x + 1 &&
                  styles.tileBlue
              )}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default Tiles
