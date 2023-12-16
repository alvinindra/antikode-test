import ArrowControl from '@/components/Game/ArrowControl/ArrowControl'
import Tiles from '@/components/Game/Tiles/Tiles'
import TimerAndScore from '@/components/Game/TimerAndScore/TimerAndScore'
import styles from '@/styles/Game.module.scss'
import { ArrowDirectionEnum } from '@/utils/enum'
import clsx from 'clsx'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'

const emptyTilesPosition = [8, 9, 10, 11, 14, 23, 26, 29]
const numRows = 6
const numCols = 6
const numTiles = numRows * numCols

const generateRandomYellowPosition = (excludedPositions) => {
  let yellowTilePosition
  do {
    yellowTilePosition = Math.floor(Math.random() * numTiles)
  } while (excludedPositions.includes(yellowTilePosition))
  return yellowTilePosition
}

export default function Game() {
  const [score, setScore] = useState(0)

  const [tiles, setTiles] = useState([])
  const [blueTilePosition, setBlueTilePosition] = useState({ x: 0, y: 5 })

  useEffect(() => {
    const newTiles = Array.from({ length: numRows }, (_, rowIndex) =>
      Array.from({ length: numCols }, (_, colIndex) => {
        const tileId = rowIndex * numCols + colIndex + 1
        return {
          id: tileId,
          type: emptyTilesPosition.includes(tileId) ? 'empty' : 'normal',
        }
      })
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

  const handleArrowClick = (direction) => {
    switch (direction) {
      case ArrowDirectionEnum.UP:
        moveBlueTile({ x: 0, y: -1 })
        break
      case ArrowDirectionEnum.DOWN:
        moveBlueTile({ x: 0, y: 1 })
        break
      case ArrowDirectionEnum.LEFT:
        moveBlueTile({ x: -1, y: 0 })
        break
      case ArrowDirectionEnum.RIGHT:
        moveBlueTile({ x: 1, y: 0 })
        break
      default:
        break
    }
  }

  return (
    <>
      <Head>
        <title>Tic Tac Tiles</title>
      </Head>
      <main>
        <div
          className={clsx(
            styles.backgroundMobile,
            'container-mobile mx-auto d-flex flex-column justify-content-center min-vh-100'
          )}
        >
          <div className="pt-4 px-4 container">
            <Tiles
              tiles={tiles}
              moveBlueTile={moveBlueTile}
              blueTilePosition={blueTilePosition}
              numCols={numCols}
            />
            <TimerAndScore score={score} />
          </div>
          <div className="container mt-auto mb-5 align-self-center">
            <div className="row mt-auto">
              <ArrowControl handleArrowClick={handleArrowClick} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
