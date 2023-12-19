import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import styles from '@/styles/Game.module.scss'

export default function TimerAndScore({ score, gameOver, setGameOver }) {
  const router = useRouter()
  const [timer, setTimer] = useState(60) // 60 seconds timer

  useEffect(() => {
    if (timer > 0) {
      const timerInterval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)

      return () => clearInterval(timerInterval)
    }
  }, [timer])

  useEffect(() => {
    if (timer === 0) {
      setGameOver(true)
    }
  }, [timer, score, setGameOver])

  const handleRetryGame = () => {
    router.reload()
  }

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${formattedMinutes}:${formattedSeconds}`
  }

  return (
    <>
      <div className="row px-1">
        <div className="col-6 fw-bold text-start text-white">
          {formatTime(timer)}
        </div>
        <div className="col-6 fw-bold text-end text-white">Total: {score}</div>
      </div>
      <Modal
        show={gameOver}
        backdrop="static"
        keyboard={false}
        size="sm"
        dialogClassName="modal-10w"
        centered
      >
        <Modal.Body>
          <div className="text-center justify-content-center">
            <div className="mb-3">
              <strong>Your points: {score}</strong>
            </div>
            <button
              className={clsx(styles.btnRetry, 'btn fw-bold')}
              onClick={handleRetryGame}
            >
              Retry
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
