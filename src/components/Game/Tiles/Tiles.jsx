import clsx from 'clsx'
import styles from './Tiles.module.scss'

const TileStylesEnum = {
  BLUE: styles.tileBlue,
  WHITE: styles.tileWhite,
  RED: styles.tileRed,
  YELLOW: styles.tileYellow,
}

const Tiles = ({ tiles }) => {
  return (
    <div className="mb-3 d-flex">
      {tiles?.map((row, rowIndex) => (
        <div key={`row${rowIndex}`}>
          {row.map((col, colIndex) => (
            <div
              key={`${rowIndex}:${colIndex}`}
              className={clsx(styles.tile, TileStylesEnum[col])}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Tiles
