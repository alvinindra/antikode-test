import { useEffect } from 'react'
import clsx from 'clsx'
import styles from './Tiles.module.scss'

const Tiles = ({ tiles, moveBlueTile, blueTilePosition, numCols }) => {
  useEffect(() => {
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
              key={rowIndex * numCols + tile.id}
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
