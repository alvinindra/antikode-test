import clsx from 'clsx'
import styles from './AboutJumbotron.module.scss'
import Navbar from '@/components/Base/Navbar/Navbar'

export default function AboutJumbotron() {
  return (
    <div className={clsx('container-fluid', styles.bgJumbotron)}>
      <div className="container px-0">
        <Navbar isDark />
      </div>
      <div className="container container-space">
        <div className="row">
          <div className="col-lg-5">
            <h1 className={clsx(styles.heroTitle, 'text-white')}>
              Force of Progress
            </h1>
            <p
              className="mb-5 text-desktop-body text-white80"
              style={{ maxWidth: '379px' }}
            >
              Daya Dimensi Indonesia is a leadership consultant that supports
              organisations develop and deliver strategic programmes such as
              assessment centre, selection, learning, and personal &
              organisational transformation.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
