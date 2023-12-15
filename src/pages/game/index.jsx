import ArrowControl from '@/components/Game/ArrowControl/ArrowControl'
import Tiles from '@/components/Game/Tiles/Tiles'
import TimerAndScore from '@/components/Game/TimerAndScore/TimerAndScore'
import styles from '@/styles/Game.module.scss'
import clsx from 'clsx'

export default function Game() {
  return (
    <div
      className={clsx(
        styles.backgroundMobile,
        'container-mobile mx-auto d-flex flex-column justify-content-center min-vh-100'
      )}
    >
      <div className="pt-4 px-4 container">
        <Tiles />
        <TimerAndScore />
      </div>
      <div className="container mt-auto mb-5 align-self-center">
        <div className="row mt-auto">
          <ArrowControl />
        </div>
      </div>
    </div>
  )
}
