import ArrowControl from '@/components/Game/ArrowControl/ArrowControl'
import Tiles from '@/components/Game/Tiles/Tiles'
import TimerAndScore from '@/components/Game/TimerAndScore/TimerAndScore'
import styles from '@/styles/Game.module.scss'
import { ArrowDirectionEnum } from '@/utils/enum'
import clsx from 'clsx'
import Head from 'next/head'
import { useCallback, useEffect, useMemo, useState } from 'react'

function checkCollision(p1, p2) {
  return p1?.[0] === p2?.[0] && p1?.[1] === p2?.[1]
}

export default function Game() {
  const dimension = useMemo(() => [6, 6], [])
  const redAreas = useMemo(
    () => [
      [1, 1],
      [2, 1],
      [3, 1],
      [4, 1],
      [1, 2],
      [1, 4],
      [4, 3],
      [4, 4],
    ],
    []
  )

  const [tiles, setTiles] = useState()

  useEffect(() => {
    const rows = []
    for (let pointX = 0; pointX < dimension[0]; pointX++) {
      const cols = []
      for (let pointY = 0; pointY < dimension[1]; pointY++) {
        cols.push(
          redAreas.some((redPoint) =>
            checkCollision(redPoint, [pointX, pointY])
          )
            ? 'RED'
            : 'WHITE'
        )
      }
      rows.push(cols)
    }
    setTiles(rows)
  }, [dimension, redAreas])

  const setPointPosition = useCallback((type, target, source) => {
    setTiles((tile) => {
      if (tile) {
        tile[target[0]][target[1]] = type
        if (source) tile[source[0]][source[1]] = 'WHITE'

        return [...tile]
      }

      return tile
    })
  }, [])

  const [bluePoint, setBluePoint] = useState()

  useEffect(() => {
    if (!bluePoint) {
      const target = [0, 5]
      setPointPosition('BLUE', target)
      setBluePoint(target)
    }
  }, [bluePoint, setPointPosition])

  const whiteAreas = useMemo(() => {
    return (
      tiles
        ?.map((row, rowIndex) =>
          row.map((col, colIndex) =>
            col === 'WHITE' ? [rowIndex, colIndex] : null
          )
        )
        .flat()
        .filter((v) => v) ?? []
    )
  }, [tiles])

  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [yellowPoint, setYellowPoint] = useState()

  useEffect(() => {
    if (bluePoint && yellowPoint && checkCollision(bluePoint, yellowPoint)) {
      setScore((prevScore) => prevScore + 100)
    }
  }, [bluePoint, yellowPoint])

  useEffect(() => {
    if ((bluePoint && !yellowPoint) || checkCollision(bluePoint, yellowPoint)) {
      const availableWhiteAreas = whiteAreas.filter(
        (area) => !checkCollision(area, bluePoint)
      )

      const point = Math.floor(Math.random() * availableWhiteAreas.length)
      const target = availableWhiteAreas[point]

      if (target) {
        setPointPosition('YELLOW', target)
        setYellowPoint(target)
      }
    }
  }, [bluePoint, yellowPoint, whiteAreas, setPointPosition])

  const moveTile = useCallback(
    (direction) => () => {
      if (bluePoint && !gameOver) {
        let target = null
        switch (direction) {
          case ArrowDirectionEnum.UP:
            if (bluePoint[1] > 0) target = [bluePoint[0], bluePoint[1] - 1]
            break
          case ArrowDirectionEnum.DOWN:
            if (bluePoint[1] < dimension[1] - 1)
              target = [bluePoint[0], bluePoint[1] + 1]
            break
          case ArrowDirectionEnum.LEFT:
            if (bluePoint[0] > 0) target = [bluePoint[0] - 1, bluePoint[1]]
            break
          case ArrowDirectionEnum.RIGHT:
            if (bluePoint[0] < dimension[0] - 1)
              target = [bluePoint[0] + 1, bluePoint[1]]
            break
        }
        if (
          target &&
          !redAreas.some((redPoint) => checkCollision(redPoint, target))
        ) {
          setPointPosition('BLUE', target, bluePoint)
          setBluePoint(target)
        }
      }
    },
    [bluePoint, gameOver, redAreas, dimension, setPointPosition]
  )

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (bluePoint && !gameOver) {
        const { keyCode } = event
        let target = null
        switch (keyCode) {
          case 37: // Left arrow
            if (bluePoint[0] > 0) target = [bluePoint[0] - 1, bluePoint[1]]
            break
          case 38: // Up arrow
            if (bluePoint[1] > 0) target = [bluePoint[0], bluePoint[1] - 1]
            break
          case 39: // Right arrow
            if (bluePoint[0] < dimension[0] - 1)
              target = [bluePoint[0] + 1, bluePoint[1]]
            break
          case 40: // Down arrow
            if (bluePoint[1] < dimension[1] - 1)
              target = [bluePoint[0], bluePoint[1] + 1]
            break
          default:
            break
        }
        if (
          target &&
          !redAreas.some((redPoint) => checkCollision(redPoint, target))
        ) {
          setPointPosition('BLUE', target, bluePoint)
          setBluePoint(target)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [bluePoint, dimension, gameOver, moveTile, redAreas, setPointPosition])

  return (
    <>
      <Head>
        <title>Tic Tac Tiles</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Tic Tac Tiles" />
        <meta
          name="description"
          content="Tic Tac Tiles is a captivating game where the objective is to navigate the blue tile, ensuring collisions with the yellow tile for accumulating game points. Enjoy an engaging gaming experience as you strategize to maximize your score in this exciting tile-based logic game"
        />
        <meta
          property="og:description"
          content="Tic Tac Tiles is a captivating game where the objective is to navigate the blue tile, ensuring collisions with the yellow tile for accumulating game points. Enjoy an engaging gaming experience as you strategize to maximize your score in this exciting tile-based logic game."
        />
      </Head>
      <main>
        <div
          className={clsx(
            styles.backgroundMobile,
            'container-mobile mx-auto d-flex flex-column justify-content-center min-vh-100'
          )}
        >
          <div className="pt-4 px-4 container">
            <Tiles tiles={tiles} moveTile={moveTile} />
            <TimerAndScore
              score={score}
              gameOver={gameOver}
              setGameOver={setGameOver}
            />
          </div>
          <div className="container mt-auto mb-5 align-self-center">
            <div className="row mt-auto">
              <ArrowControl moveTile={moveTile} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
