import { useEffect, useState } from 'react'

export default function TimerAndScore({ score }) {
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
    // Game over logic
    if (timer === 0) {
      alert(`Game over! Your score is ${score}`)
    }
  }, [timer, score])

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
    return `${formattedMinutes}:${formattedSeconds}`
  }

  return (
    <div className="row px-1">
      <div className="col-6 fw-bold text-start text-white">
        {formatTime(timer)}
      </div>
      <div className="col-6 fw-bold text-end text-white">Total: {score}</div>
    </div>
  )
}
