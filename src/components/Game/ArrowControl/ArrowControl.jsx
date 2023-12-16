import clsx from 'clsx'
import styles from './ArrowControl.module.scss'
import { ArrowDirectionEnum } from '@/utils/enum'

export default function ArrowControl({ handleArrowClick }) {
  return (
    <div className="container d-flex flex-column gap-3">
      <div className="row justify-content-center">
        <div
          className={clsx('col-1', styles.arrowControl)}
          onClick={() => handleArrowClick(ArrowDirectionEnum.UP)}
        >
          <i className={clsx(styles.arrow, styles.up)}></i>
        </div>
      </div>
      <div className="row justify-content-center">
        <div
          className={clsx('col-1 ms-auto me-5', styles.arrowControl)}
          onClick={() => handleArrowClick(ArrowDirectionEnum.LEFT)}
        >
          <i className={clsx(styles.arrow, styles.left)}></i>
        </div>
        <div
          className={clsx('col-1 me-auto ms-5', styles.arrowControl)}
          onClick={() => handleArrowClick(ArrowDirectionEnum.RIGHT)}
        >
          <i className={clsx(styles.arrow, styles.right)}></i>
        </div>
      </div>
      <div className="row justify-content-center">
        <div
          className={clsx('col-1', styles.arrowControl)}
          onClick={() => handleArrowClick(ArrowDirectionEnum.DOWN)}
        >
          <i className={clsx(styles.arrow, styles.down)}></i>
        </div>
      </div>
    </div>
  )
}
